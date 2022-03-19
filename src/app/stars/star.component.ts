import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
})
export class StarComponent implements OnChanges {

    @Input()
    rating: number = 0;

    starWith: number = 0;

    ngOnChanges(changes: SimpleChanges): void {
        this.starWith = this.rating * 94 / 5;
    }

}