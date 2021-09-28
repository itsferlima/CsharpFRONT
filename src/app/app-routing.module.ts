import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarComponent } from "./componentes/views/pessoa/listar/listar.component";
import { CadastrarComponent } from "./componentes/views/pessoa/cadastrar/cadastrar.component";

const routes: Routes = [
    {
        path: "",
        component: ListarComponent,
    },
    {
        path: "pessoa/listar",
        component: ListarComponent,
    },
    {
        path: "pessoa/cadastrar",
        component: CadastrarComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}