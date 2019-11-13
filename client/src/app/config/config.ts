import * as $ from 'jquery';
import { OnInit } from '@angular/core';

export const URL_BACKEND = 'https://spring-angular-mysql.herokuapp.com';

//export const URL_BACKEND = 'http://localhost:8080';


export class Config{

    placeholder(){

      $(function () {

      $(".field-wrapper .field-placeholder").on("click", function () {
          $(this).closest(".field-wrapper").find("input").focus();
      });
      $(".field-wrapper input").on("keyup", function () {
          var value = $.trim(<string>$(this).val());
          if (value) {
              $(this).closest(".field-wrapper").addClass("hasValue");
          } else {
              $(this).closest(".field-wrapper").removeClass("hasValue");
          }
      });

  });

    }

}
