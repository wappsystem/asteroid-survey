(function(){
    var modules={
        "not_elig":         {url:"$H/m/not_elig.html"},
        "eligible":    {url:"$H/m/eligible.html",router:1},
        "survey-data": {url:"$H/m/elig-questions-data.html",Table:"asteroid-survey-record",form_module:"survey-form",router:1},
        "survey-form": {url:"$H/m/elig-questions-form.html",Table:"asteroid-survey-record"},
        "dsa-survey-data": {url:"$H/m/dsa-data.html",Table:"asteroid-dsa-survey-record",form_module:"dsa-survey-form",router:1},
        "dsa-survey-form": {url:"$H/m/dsa-form.html",Table:"asteroid-dsa-survey-record"},
        
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }
})();
