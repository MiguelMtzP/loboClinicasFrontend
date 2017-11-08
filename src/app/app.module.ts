import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {routing,appRoutingProviders} from './app.routing'
import { AppComponent } from './app.component';
import { ListaCursosComponent } from './components/listaCursos.component';
import { AgendaComponent } from './components/agenda.component';
import { listaPacientesComponent } from './components/listaPacientes.component';
import { LoginComponent } from './components/login.component';
import { DetallePacienteComponent } from './components/detallePaciente.component';
import { NuevoPacienteComponent } from './components/nuevoPaciente.component';
import { HeaderComponent } from './components/header/header.component';
import { EditaPacienteComponent } from './components/edita-paciente/edita-paciente.component';
import { AgregaCitaComponent } from './components/agrega-cita/agrega-cita.component';
import { DetalleCitaComponent } from './components/detalle-cita/detalle-cita.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RegistroAlumnoComponent } from './components/registro-alumno/registro-alumno.component';
import { LoginProfesorComponent } from './components/login-profesor/login-profesor.component';
import { CursosProfesorComponent } from './components/cursos-profesor/cursos-profesor.component';
import { RegistroProfesorComponent } from './components/registro-profesor/registro-profesor.component';
import { HeaderProfesorComponent } from './components/header-profesor/header-profesor.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { DetalleCursoProfesorComponent } from './components/detalle-curso-profesor/detalle-curso-profesor.component';
import { DetalleAlumnoComponent } from './components/detalle-alumno/detalle-alumno.component';
import { DetalleCursoAlumnoComponent } from './components/detalle-curso-alumno/detalle-curso-alumno.component';
import { AgregaConsultaComponent } from './components/agrega-consulta/agrega-consulta.component';
import { EvaluaAlumnoComponent } from './components/evalua-alumno/evalua-alumno.component';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  routing,
                  ReactiveFormsModule
                ],
  declarations: [
                  AppComponent,
                  LoginComponent,
                  ListaCursosComponent,
                  AgendaComponent,
                  listaPacientesComponent,
                  DetallePacienteComponent,
                  NuevoPacienteComponent,
                  HeaderComponent,
                  EditaPacienteComponent,
                  AgregaCitaComponent,
                  DetalleCitaComponent,
                  UserProfileComponent,
                  RegistroAlumnoComponent,
                  LoginProfesorComponent,
                  CursosProfesorComponent,
                  RegistroProfesorComponent,
                  HeaderProfesorComponent,
                  CrearCursoComponent,
                  DetalleCursoProfesorComponent,
                  DetalleAlumnoComponent,
                  DetalleCursoAlumnoComponent,
                  AgregaConsultaComponent,
                  EvaluaAlumnoComponent

                ],
  bootstrap:    [ AppComponent],
  providers:    [appRoutingProviders]
})
export class AppModule { }
