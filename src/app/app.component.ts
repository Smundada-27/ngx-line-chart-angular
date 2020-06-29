import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  colorScheme = {
    domain: ['#08DDC1', '#FFDC1B', '#FF5E3A']
  };

  data = [
  {
    "name": "green",
    "series": [
      {
        "name": "Jan",
        "value": 1
      },
      {
        "name": "Feb",
        "value": 2
      },
      {
        "name": "March",
        "value": 3
      },
      {
        "name": "Apr",
        "value": 4
      },
      {
        "name": "May",
        "value": 5
      },
      {
        "name": "Jun",
        "value": 6
      },
      {
        "name" : "July",
        value: 7
      },
      {
        "name" : "Aug",
        value: 8
      },
      {
        "name" : "Sept",
        value: 9
      },
      {
        "name" : "Oct",
        value: 10
      },
      {
        "name" : "Nov",
        value: 11
      },
      {
        "name" : "Dec",
        value: 12
      }
    ]
  },

  {
    "name": "yellow",
    "series": [
      {
        "name": "Aug",
        "value": 364
      },
      {
        "name": "Sep",
        "value": 412
      },
      {
        "name": "Oct",
        "value": 437
      },
      {
        "name": "Nov",
        "value": 437
      },
      {
        "name": "Dec",
        "value": 364
      },
      {
        "name": "Jan",
        "value": 412
      }
    ]
  },
  {
    "name": "red",
    "series": [
      {
        "name": "Aug",
        "value": 168
      },
      {
        "name": "Sep",
        "value": 343
      },
      {
        "name": "Oct",
        "value": 512
      },
      {
        "name": "Nov",
        "value": 291
      },
      {
        "name": "Dec",
        "value": 168
      },
      {
        "name": "Jan",
        "value": 343
      },
    ]
  }
]
}
