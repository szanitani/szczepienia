jQuery(function(){
  
   jQuery.when(
      jQuery.ajax("templates/cowiesz.html"),
      jQuery.ajax("data/cowiesz.json")
   ).done(function( template, data ) {
      var cellCnt=0;
      var rdata=data[0];
      if(jQuery.type(rdata)==="string") {
         rdata=JSON.parse(rdata);
      }
      rdata['firstCell']=function(id) {
         cellCnt=0;
         return '';
      };
      rdata['nextCell']=function(id,i,j) {
         cellCnt+=1;
         return cellCnt;
      };
      var ractive = new Ractive({
         el:'body',
         template:template[0],
         data:rdata
      });
      
      jQuery('#sheet0').calx({
         'autoCalculateTrigger':'blur'
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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create','UA-62168129-1','auto');
ga('send','pageview');
