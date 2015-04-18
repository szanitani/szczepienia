jQuery(function(){
   
   jQuery.when(
      jQuery.ajax("templates/cowiesz.html"),
      jQuery.ajax("data/cowiesz.json")
   ).done(function( template, data ) {
      var cellCnt=0;
      data[0]['firstCell']=function(id) {
         cellCnt=0;
         return '';
      };
      data[0]['nextCell']=function(id,i,j) {
         cellCnt+=1;
         return cellCnt;
      };
      var ractive = new Ractive({
         el: 'body',
         template: template[0],
         data: data[0]
      });
      
      jQuery('#sheet0').calx({
         'autoCalculateTrigger'  : 'blur'
      });

      var l;
      jQuery('form').submit(function(){
         return false;
      });
      l=jQuery('.form-group').length;
      jQuery('#r_pytania').text(l);
      jQuery('#r_punkty').text(l*100);

   });   
});
