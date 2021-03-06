import { Component, Input } from "@angular/core";
import { GroupService } from "./group.service";
import { Router } from "@angular/router";


@Component({
    templateUrl: "./group-join.component.html",
    providers: [GroupService]
})

export class GroupJoinComponent {

    // Attributes that will be used on views
    title = 'Juntar a Grupo';

    constructor(private _service: GroupService, private router: Router) { }

    join(name: string, password: string) {
        console.log(name, password);
        this._service.joinGroup(name, password).subscribe(
            success => {
                let myContainer = <HTMLElement>document.querySelector("#notif");
                myContainer.innerHTML = '<div class="alert alert-success"><strong>Juntou-se</strong> ao grupo com sucesso</div>';
                setTimeout(() => { myContainer.innerHTML = '' }, 3000)
                var data = JSON.parse(localStorage.getItem('currentUser'));
                data.group_id = success.data.id;
                data.group_name = name;
                localStorage.setItem('currentUser', JSON.stringify(data));
                this.router.navigate(['home']);
            },
            error => {
                let myContainer = <HTMLElement>document.querySelector("#notif");
                myContainer.innerHTML = '<div class="alert alert-danger">' + error + '</div>';
                setTimeout(() => { myContainer.innerHTML = '' }, 3000)
            }
        );
    }
}