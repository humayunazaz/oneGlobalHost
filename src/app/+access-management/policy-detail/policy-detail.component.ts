import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-policy-detail',
  templateUrl: './policy-detail.component.html',
  styleUrls: ['./policy-detail.component.css']
})
export class PolicyDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  policy;
  
  options = {
    "ajax": 'policy.json',
    
    "columns": [
      {
        "class": 'details-control',
        "orderable": false,
        "data": null,
        "defaultContent": ''
      },
      {'data':'action'},
      {'data': 'resource'},
      {'data': 'request'}
    ]
  }
  
  public detailsFormat(d) {

    return `<table cell-padding="5" cell-spacing="0" border="0" class="table table-hover table-condensed">
            <tbody>
              <tr>
                  <td>${d.tags}</td>
                  <td>${d.resources}</td>
                  <td>${d.condition}</td>
              </tr>
              <tr>
                  <td>${d.tags2}</td>
                  <td>${d.resources2}</td>
                  <td>${d.condition2}</td>
              </tr>
              <tr>
                  <td>${d.tags3}</td>
                  <td>${d.resources3}</td>
                  <td>${d.condition3}</td>
              </tr>
              <tr>
                  <td>${d.tags4}</td>
                  <td>${d.resources4}</td>
                  <td>${d.condition4}</td>
              </tr>
              <tr>
                  <td>${d.tags5}</td>
                  <td>${d.resources5}</td>
                  <td>${d.condition5}</td>
              </tr>
            </tbody>
        </table>`
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.policy = params['name'];
      }
    )
  }

}
