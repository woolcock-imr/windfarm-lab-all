//var participant_pid=$vm.module_list['participant']['table_id'];

var _module=$vm.module_list[$vm.vm['__ID'].name];
var participant_pid;
if($vm.module_list['participant']!==undefined) participant_pid=$vm.module_list['participant'].table_id;
if(_module.var!==undefined){
    participant_pid=_module.var.participant;
}

$('#Participant__ID').autocomplete({
    minLength:0,
    source:function(request,response){
        var sql="with tb as (select name=@('Registration_ID'),value2=UID,value3=S1 from [FORM-"+participant_pid+"])";
        sql+=" select top 10 name,value=name,value2,value3 from tb where Name like '%'+@S1+'%' ";
        $VmAPI.request({data:{cmd:'auto',s1:request.term,sql:sql,minLength:0},callback:function(res){
            response($vm.autocomplete_list(res.table));
        }});
    },
    select: function(event,ui){
        $('#Participant_uid__ID').val(ui.item.value2);
        $('#save__ID').css('background','#E00');
    }
})
$('#Participant__ID').focus(function(){$('#Participant__ID').autocomplete("search","");});
$('#Participant_r__ID').on('click',function(){$('#Participant__ID').val('');$('#Participant_uid__ID').val('');})
//-------------------------------------
var _task_fields;
//-------------------------------------
var _set_participant_field=function(){
    if($vm.vm['__ID'].op.from_grid==="1"){
        $('#tr_participant__ID').show();
    }
    else{
        $('#tr_participant__ID').hide();
        _records[0].Participant=_trigger_parameters.participant;
        _records[0].Participant_uid=_trigger_parameters.participant_uid;
    }
    $('#Participant__ID').blur(function(){
        _records[I].Participant=$('#Participant__ID').val();
        _records[I].Participant_uid=$('#Participant_uid__ID').val();
    })
}
//-------------------------------------
