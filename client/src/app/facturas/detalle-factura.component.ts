import { Component, OnInit } from '@angular/core';
import { FacturaService } from './services/factura.service';
import { Factura } from './models/factura';
import { ActivatedRoute } from '@angular/router';

import 'jspdf-autotable';


declare var jsPDF: any;

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html'
})
export class DetalleFacturaComponent implements OnInit {

  factura: Factura;

  constructor(private facturaService: FacturaService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      this.facturaService.getFactura(id).subscribe(factura => this.factura = factura);
    });
  }


  downloadPDF() {

    let doc = new jsPDF('p', 'pt');

    let columns = [document.getElementById("li-title").innerHTML, ""];
    let rows = [
        [this.factura.cliente.nombre,this.factura.cliente.apellido]
    ];

    doc.autoTable(columns, rows, {
        // theme: 'striped',
        styles: {},
        tableLineColor: [0,0,.125],
        tableLineWidth: .12,
        alternateRowStyles: { fillColor: [242, 242, 242]
        },
        margin: {top: 60},
    });


    let columns1 = [document.getElementById("li-invoice").innerHTML];
    let rows1 = [
        [this.factura.id],
        [this.factura.descripcion],
        [this.factura.createAt]
    ];

    doc.autoTable(columns1, rows1, {
        styles: {},
        tableLineColor: [0,0,.125],
        tableLineWidth: .12,
        alternateRowStyles: { fillColor: [242, 242, 242]
        },
        margin: {top: 60},
    });


    var res = doc.autoTableHtmlToJson(document.getElementById('table'));
    doc.autoTable(res.columns, res.data, {
          styles: {},
          tableLineColor: [0,0,.125],
          tableLineWidth: .12,
          alternateRowStyles: { fillColor: [242, 242, 242]
          },
          margin: {top: 60},
    });


    doc.autoTable(["",""], [
        ["                                                                                " +document.getElementById("gran-total-titulo").innerHTML,
        document.getElementById("gran-total").innerHTML]]
        , {
        theme: 'plain',
        styles: {fontStyle: 'bold'},
        tableLineColor: [0,0,.125],
        tableLineWidth: .12,
        alternateRowStyles: { fillColor: [242, 242, 242]
        },
        margin: {top: 60},
        rowMarging: 20,
    });


    doc.autoTable([document.getElementById("observaciones").innerHTML], [
        [this.observaciones()]]
        , {
        theme: 'plain',
        styles: {},
        tableLineColor: [0,0,.125],
        tableLineWidth: .12,
        alternateRowStyles: { fillColor: [242, 242, 242]
        },
        margin: {top: 60},
    });

    doc.save('table.pdf');
   }

 observaciones(){
   if(this.factura.observacion==null){
     this.factura.observacion = document.getElementById("observaciones-contenido").innerHTML;
   }
   return this.factura.observacion;
 }

}
