import {NgModule} from '@angular/core'
import { ContadorComponent } from './contador/contador.component';




@NgModule({
    declarations:[
        ContadorComponent
    ],
    ///  Que quiero que sea vivisble o usado
    exports:[
        ContadorComponent
    ]
})


export class ContadorModule {}