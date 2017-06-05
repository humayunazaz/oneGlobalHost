import {Component, Input, ElementRef, AfterContentInit, OnInit, Output, EventEmitter, Renderer} from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({

  selector: 'sa-datatable',
  template: `
      <table class="dataTable responsive {{tableClass}}" width="{{width}}">
        <ng-content></ng-content>
      </table>
`,
  styles: [
    require('smartadmin-plugins/datatables/datatables.min.css')
  ]
})
export class DatatableComponent implements OnInit {

  @Input() public options:any;
  @Input() public filter:any;
  @Input() public detailsFormat:any;

  @Input() public paginationLength: boolean;
  @Input() public columnsHide: boolean;
  @Input() public tableClass: string;
  @Input() public width: string = '100%';
  @Output() accountStatus = new EventEmitter();
  @Output() accessSingle = new EventEmitter(); 
  @Output() updateUser = new EventEmitter();
  @Output() openTables = new EventEmitter();

  constructor(private el: ElementRef, private renderer:Renderer, private router:Router) {
    let sample = this.renderer.listen('document', 'click', (event)=> {
      if(event.target.className == 'single'){
        // console.log(event.srcElement.offsetParent.childNodes.tbody.children[0]);
        this.router.navigate(['accounts']);
      }
      if(event.target.className == 'accessOpen'){
        let value = event.target.innerText;
        this.accessSingle.emit({value});
      }
      if(event.target.className == 'permissionNavi'){
        console.log(event.target.innerText);
        this.router.navigate(['access/policyDetail', event.target.innerText]);
      }
      if(event.target.className == 'openProjects'){
        let value = event.target.innerText;
        this.openTables.emit(value);
      }
      if(event.target.className == 'gotoInfra'){
        this.router.navigate(['infrastructure/general/singleinstance']);
      }
      if(event.target.className == 'gotoStack'){
        this.router.navigate(['appStack']);
      }
      if(event.target.className.indexOf('gotoinfraDetail') > -1){
        this.router.navigate(['projects/infraDetail']);
      }
      if(event.target.className.indexOf('gotostackDetail') > -1){
        this.router.navigate(['projects/stackDetail']);
      }
    });
  }

  ngOnInit() {
    Promise.all([
      System.import('script-loader!smartadmin-plugins/datatables/datatables.min.js'),
    ]).then(()=>{
      this.render()
    });
  }

  render() {
    let element = $(this.el.nativeElement.children[0]);
    let options = this.options || {}


    let toolbar = '';
    if (options.buttons)
      toolbar += 'B';
    if (this.paginationLength)
      toolbar += 'l';
    if (this.columnsHide)
      toolbar += 'C';

    if (typeof options.ajax === 'string') {
      let url = options.ajax;
      options.ajax = {
        url: url,
        // complete: function (xhr) {
        //
        // }
      }
    }

    options = $.extend(options, {

      "dom": "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs text-right'" + toolbar + ">r>" +
      "t" +
      "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
      oLanguage: {
        "sSearch": "<span class='input-group-addon'><i class='glyphicon glyphicon-search'></i></span> ",
        "sLengthMenu": "_MENU_"
      },
      "autoWidth": false,
      retrieve: true,
      responsive: true,
      initComplete: (settings, json)=> {
        element.parent().find('.input-sm', ).removeClass("input-sm").addClass('input-md');
      }
    });

    const _dataTable = element.DataTable(options);

    if (this.filter) {
      // Apply the filter
      element.on('keyup change', 'thead th input[type=text]', function () {
        _dataTable
          .column($(this).parent().index() + ':visible')
          .search(this.value)
          .draw();

      });
    }


    // if (!toolbar) {
    //   element.parent().find(".dt-toolbar").append('<div class="text-right"><img src="assets/img/logo.png" alt="SmartAdmin" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>');
    // }

    if(this.detailsFormat){
      let format = this.detailsFormat
      element.on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = _dataTable.row( tr );
        if ( row.child.isShown() ) {
          row.child.hide();
          tr.removeClass('shown');
        }
        else {
          row.child( format(row.data()) ).show();
          tr.addClass('shown');
        }
      })
      element.on('click', '.accountsStatus', function () {
        var inp = $(this).find('input');
        let value;
        setTimeout(() => {
          if(inp.is(':checked')){
            value = true;
          } else{
            value = false;
          }
        }, 200);
        
      })
    }
    

  }
}
