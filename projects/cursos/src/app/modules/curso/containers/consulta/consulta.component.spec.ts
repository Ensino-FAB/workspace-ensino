// TODO:
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { ButtonModule } from '@cca-fab/cca-fab-components-common';
// import { CursoModule } from '../../curso.module';
// import { ConsultaComponent } from './consulta.component';

// describe('ConsultaComponent', () => {
//   let component: ConsultaComponent;
//   let fixture: ComponentFixture<ConsultaComponent>;
//   const COUNT_MAX = 1000;

//   // beforeEach(async(() => {
//   //   TestBed.configureTestingModule({
//   //     imports: [
//   //       CursoModule,
//   //       HttpClientTestingModule,
//   //       ButtonModule,
//   //       RouterTestingModule,
//   //     ],
//   //   }).compileComponents();
//   // }));

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         CursoModule,
//         HttpClientTestingModule,
//         ButtonModule,
//         RouterTestingModule,
//       ],
//     }).compileComponents();
//     fixture = TestBed.createComponent(ConsultaComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     component.count = COUNT_MAX;
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('Should call refresh on ngOnInit', () => {
//     const ngOnInitSpy = jest
//       .spyOn(component, 'ngOnInit')
//       .mockImplementation(() => null);

//     component.ngOnInit();

//     expect(component).toBeTruthy();
//     expect(ngOnInitSpy).toHaveBeenCalled();
//   });

//   it('Should create with values', () => {
//     expect(component.pageSize).toBe(20);
//     expect(component.page).toBe(1);
//     expect(component.count).toBe(COUNT_MAX);
//   });

//   it('Should call functions and change variables', () => {
//     const refreshSpy = jest.spyOn(component, 'refresh');

//     component.totalPages = 5;

//     component.handleNextPage();
//     expect(component.page).toBe(2);

//     component.handlePageSizeChange(50);
//     expect(component.pageSize).toBe(50);

//     component.onFirstPage();
//     expect(component.page).toBe(1);

//     expect(refreshSpy).toHaveBeenCalledTimes(3);
//   });

//   it('Should call functions', () => {
//     const refreshSpy = jest.spyOn(component, 'refresh');
//     const handlePageSizeChangeSpy = jest.spyOn(
//       component,
//       'handlePageSizeChange'
//     );
//     const onFirstPageSpy = jest.spyOn(component, 'onFirstPage');
//     const onLastPageSpy = jest.spyOn(component, 'onLastPage');
//     const handlePageIndexChangeSpy = jest.spyOn(
//       component,
//       'handlePageIndexChange'
//     );
//     const handleNextPageSpy = jest.spyOn(component, 'handleNextPage');
//     const handlePreviousPageSpy = jest.spyOn(component, 'handlePreviousPage');

//     component.count = COUNT_MAX;
//     component.page = 1;
//     component.pageSize = 20;
//     component.totalPages = Math.ceil(component.count / component.pageSize);

//     component.handlePageSizeChange(50);
//     expect(component.pageSize).toBe(50);

//     component.onLastPage();
//     expect(component.page).toBe(component.totalPages);

//     component.onFirstPage();
//     expect(component.page).toBe(1);

//     component.page = 1;
//     component.handlePageIndexChange(2);
//     expect(component.page).toBe(2);

//     component.handleNextPage();
//     expect(component.page).toBe(3);

//     component.handlePreviousPage();
//     expect(component.page).toBe(2);

//     component.refresh();

//     expect(handlePageSizeChangeSpy).toHaveBeenCalledTimes(1);
//     expect(onFirstPageSpy).toHaveBeenCalledTimes(1);
//     expect(onLastPageSpy).toHaveBeenCalledTimes(1);
//     expect(handlePageIndexChangeSpy).toHaveBeenCalledTimes(1);
//     expect(handleNextPageSpy).toHaveBeenCalledTimes(1);
//     expect(handlePreviousPageSpy).toHaveBeenCalledTimes(1);
//     expect(handlePageSizeChangeSpy).toHaveBeenCalledTimes(1);
//     expect(refreshSpy).toHaveBeenCalledTimes(7);
//   });

//   it('Should call handleSortChange with null param and return default sort', () => {
//     const handleSortChangeSpy = jest.spyOn(component, 'handleSortChange');
//     const refreshSpy = jest.spyOn(component, 'refresh');

//     component.handleSortChange(null);

//     expect(component.orderBy).toContain('id');
//     expect(handleSortChangeSpy).toHaveBeenCalled();
//     expect(refreshSpy).toHaveBeenCalled();
//   });

//   it('Should call handleInvertSort with length 1', () => {
//     const handleInvertSortSpy = jest.spyOn(component, 'handleInvertSort');
//     const refreshSpy = jest.spyOn(component, 'refresh');

//     component.handleInvertSort();

//     expect(component.orderBy.length).toBe(1);
//     expect(handleInvertSortSpy).toHaveBeenCalled();
//     expect(refreshSpy).toHaveBeenCalled();
//   });

//   it('Should Submit', () => {
//     const onSubmitSpy = jest.spyOn(component, 'onSubmit');
//     const refreshSpy = jest.spyOn(component, 'refresh');

//     component.page = 1557;
//     component.onSubmit();

//     expect(component.page).toBe(1);
//     expect(onSubmitSpy).toHaveBeenCalled();
//     expect(refreshSpy).toHaveBeenCalled();
//   });

//   it('Should clean', () => {
//     const cleanSpy = jest.spyOn(component, 'clean');

//     component.cursoSearch.get('codigo').setValue('AAA');
//     component.cursoSearch.get('nome').setValue('BBB');
//     component.cursoSearch.get('q').setValue('CCC');
//     component.clean();

//     expect(cleanSpy).toHaveBeenCalled();
//     expect(component.cursoSearch.value).toEqual({
//       codigo: null,
//       nome: null,
//       q: null,
//     });
//   });
// });
