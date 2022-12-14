import {  Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-task',
    template: `
        <div class="list-item">
            <label [attr.aria-label]="task.title + ''" for="title">
                <input
                    type="text"
                    [value]="task.title"
                    readonly="true"
                    id="title"
                    name="title"
                />
            </label>
        </div>
    `,
})
export class TaskComponent {
    @Input() task: any;

    // tslint:disable-next-line: no-output-on-prefix
    @Output()
    onPinTask = new EventEmitter<Event>();

    @Output()
    onArchiveTask = new EventEmitter<Event>();

    const str = 'hello, typescript language server';
    console.log(str2);
}
