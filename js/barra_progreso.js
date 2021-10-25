  /* este script
                genera una barra que crece con scroll*/

            $(window).on('scroll', barraScroll);


            //console.log('altura body: ', $('body').innerHeight());
           // console.log('altura ventana: ', $(window).innerHeight());
 
            function barraScroll(){

                var scrollRealizado = $(window).scrollTop();
                // scrollTop() retorna el valor de scroll realizado en la ventana. Al inicio será 0.

                //console.log('scroll: ', scrollRealizado);

                var zonaScroleable = $('body').innerHeight() - $(window).innerHeight();
                // innerHeight() calcula la altura de un elemento.

                var dimensionBarra = scrollRealizado /  zonaScroleable * 100;

                console.log('Dimensión Barra: ', dimensionBarra);
 
                // modificar la propiedad width del CSS de la barra:

                $('#barra_progreso').css('width', dimensionBarra + '%');
 
            }