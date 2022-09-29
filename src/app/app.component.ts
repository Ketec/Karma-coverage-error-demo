import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  uis = {
    "type": "HorizontalLayout",
    "elements": [
      {
        "type": "Control",
        "scope": "#/properties/active",
        "label": "Boolean"
      }
    ]
  };

  schema = {
    "type": "object",
    "properties": {
      "active": {
        "type": "boolean"
      }
    }
  }  
}
