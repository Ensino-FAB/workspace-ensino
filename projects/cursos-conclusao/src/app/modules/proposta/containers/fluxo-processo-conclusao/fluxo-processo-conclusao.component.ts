import { Component, OnInit } from '@angular/core';
import {
  Tarefa,
  TarefaFormField,
  TarefaFormFieldSectionProps,
} from '../../../../models/tarefa.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../../../../../ensino-commons/src/lib/services/toast.service';
import { SelectOption } from '@cca-fab/cca-fab-components-common/types/select';
import { fadeIn } from '../../../../../../../ensino-commons/src/lib/utils/animation';
import { PropostaFacade } from '../../proposta.facade';

@Component({
  selector: 'app-fluxo-processo-conclusao',
  templateUrl: './fluxo-processo-conclusao.component.html',
  styleUrls: ['./fluxo-processo-conclusao.component.scss'],
  animations: [fadeIn()],
})
export class FluxoProcessoConclusaoComponent implements OnInit {
  _tarefaInstanceId: string;

  tarefa: Tarefa;

  formGroup: FormGroup = new FormGroup({});

  sections = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private facade: PropostaFacade,
    private notification: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((parameter) => {
      this._tarefaInstanceId = parameter.taskId;
      this.facade.getTarefa(this._tarefaInstanceId).subscribe((res) => {
        this.tarefa = res;
        this.sections = this.parseForm(this.tarefa);
      });
    });
  }

  onConfirm() {
    this.facade
      .completeTarefa(this._tarefaInstanceId, {
        ...this.formGroup.value,
        pedidoAlteracaoId: this.tarefa.propostaId,
      })
      .subscribe((res) => {
        console.log(res);
        this.notification.show({
          message: 'Etapa de processo atualizada com sucesso!',
          type: 'success',
        });
        this.router.navigate([
          `/proposta/detalhes/${this.tarefa.propostaId}/processo/${this.tarefa.rootProcessInstanceId}`,
        ]);
      });
  }

  private parseForm(task: Tarefa) {
    const sections = task.formData.formFields
      .filter(
        (formField: TarefaFormField) => formField.properties.type === 'section'
      )
      .map((sectionFormField: TarefaFormField) => ({
        id: sectionFormField.id,
        title: sectionFormField.label,
        step: (sectionFormField.properties as TarefaFormFieldSectionProps).step,
        isBlock:
          (sectionFormField.properties as TarefaFormFieldSectionProps)
            .isBlock === 'true'
            ? true
            : false,
        isPartly:
          (sectionFormField.properties as TarefaFormFieldSectionProps)
            .isPartly === 'true'
            ? true
            : false,
        description: (sectionFormField.properties as TarefaFormFieldSectionProps)
          .description,
        children: [],
      }));

    const formFields = task.formData.formFields.filter(
      (formField: TarefaFormField) => formField.properties.type !== 'section'
    );

    for (const formField of formFields as TarefaFormField[]) {
      const selectedSection = sections.find(
        (section) => section.id === formField.properties.parent
      );

      this.formGroup.addControl(
        formField.id,
        new FormControl(null, Validators.required)
      );

      if (selectedSection) {
        selectedSection.children.push({
          id: formField.id,
          title: formField.label,
          ...(formField.options
            ? { options: this.getSelectOptions(formField.options) }
            : {}),
          ...formField.properties,
        });
      }
    }

    return sections;
  }

  private getSelectOptions(options: object): SelectOption[] {
    return Object.entries(options).map((option) => ({
      name: option[1],
      value: option[0],
    })) as SelectOption[];
  }
}
