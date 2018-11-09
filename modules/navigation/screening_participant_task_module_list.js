var _screening_task_list__ID=function(){
        var L=$vm.module_list,B=$vm.hosting_path+'/woolcock-imr/windfarm';
        var v={
            participant:            '20009058',
            notes:                  '20008850',
            site_filter:            '0',
            participant_login_setup:'20009059',
            participant_login_setup_module:     'woolcock_windform_in_lab_participant_login_setup',
            participant_quest_data_entry_module:'woolcock_windform_in_lab_participant_data_entry',
            notes_module:                       'woolcock_windform_in_lab_notes',
            consent_tid:'20009060',
            general_info_tid:'20009061',
            wnss_tid:'20009063',
            isi_score_tid:'20009064',
        }
        var L=$vm.module_list,B=$vm.hosting_path+'/woolcock-imr/windfarm',A='woolcock_windform_';
        //------------------------------------
        L.woolcock_windform_screening_consent=                   {table_id:'20009060',var:v,url:B+'/modules/task_screening/consent.html',form_module:A+'screening_consent_quest',notes:'Consent',task:'Consent'};
        L.woolcock_windform_screening_consent_quest=             {table_id:'20009060',var:v,url:B+'/modules/task_screening/consent.form.html'};
        L.woolcock_windform_screening_general_information=       {table_id:'20009061',var:v,url:B+'/modules/task_screening/general_information.html',notes:'General Information',form_module:A+'screening_general_information_quest',task:'General Information'};
        L.woolcock_windform_screening_general_information_quest= {table_id:'20009061',var:v,url:B+'/modules/task_screening/general_information.form.html'};
        //L.woolcock_windform_screening_yes_no_questions=          {table_id:'20009062',var:v,url:B+'/modules/task_screening/screening_yes_no_questions.html',notes:'Some Questions',form_module:A+'screening_yes_no_questions_quest',task:'Some Questions'};
        //L.woolcock_windform_screening_screening_yes_no_questions_quest=    {table_id:'20009063',var:v,url:B+'/modules/task_screening/screening_yes_no_questions.form.html'};
        L.woolcock_windform_screening_weinstein_noise_sensitivity_score=          {table_id:'20009063',var:v,url:B+'/modules/task_screening/weinstein_noise_sensitivity.html',notes:'Weinstein Noise Sensitivity Score',form_module:A+'screening_weinstein_noise_sensitivity_score_quest',task:'Weinstein Noise Sensitivity Score'};
        L.woolcock_windform_screening_weinstein_noise_sensitivity_score_quest=    {table_id:'20009063',var:v,url:B+'/modules/task_screening/weinstein_noise_sensitivity.form.html'};
        L.woolcock_windform_screening_insomnia=           {table_id:'20009064',var:v,url:B+'/modules/task_screening/Insomnia_Severity_Index.html',notes:'Insomnia Severity Score',form_module:A+'screening_insomnia_quest',task:'Insomnia Severity Score'};
        L.woolcock_windform_screening_insomnia_quest=     {table_id:'20009064',var:v,url:B+'/modules/task_screening/Insomnia_Severity_Index.form.html'};
        L.woolcock_windform_screening_ethnicity=          {table_id:'20009073',var:v,url:B+'/modules/task_screening/ethnicity.html',notes:'Ethnicity',form_module:A+'screening_ethnicity_quest',task:'Ethnicity'};
        L.woolcock_windform_screening_ethnicity_quest=    {table_id:'20009073',var:v,url:B+'/modules/task_screening/ethnicity.form.html'};
        L.woolcock_windform_screening_lifestyle=          {table_id:'20009074',var:v,url:B+'/modules/task_screening/lifestyle.html',notes:'Lifestyle',form_module:A+'screening_lifestyle_quest',task:'Lifestyle'};
        L.woolcock_windform_screening_lifestyle_quest=    {table_id:'20009074',var:v,url:B+'/modules/task_screening/lifestyle.form.html'};
        L.woolcock_windform_screening_medical_history=          {table_id:'20009075',var:v,url:B+'/modules/task_screening/medical_history.html',notes:'Medical History',form_module:A+'screening_medical_history_quest',task:'Medical History'};
        L.woolcock_windform_screening_medical_history_quest=    {table_id:'20009075',var:v,url:B+'/modules/task_screening/medical_history.form.html'};
        L.woolcock_windform_screening_medication=               {table_id:'20009076',var:v,url:B+'/modules/task_screening/medication.html',notes:'Medication',form_module:A+'screening_medication_quest',task:'Medication'};
        L.woolcock_windform_screening_medication_quest=         {table_id:'20009076',var:v,url:B+'/modules/task_screening/medication.form.html'};
        L.woolcock_windform_screening_recreational_drugs=          {table_id:'20009077',var:v,url:B+'/modules/task_screening/recreational_drugs.html',notes:'Recreational Drugs',form_module:A+'screening_recreational_drugs_quest',task:'Recreational Drugs'};
        L.woolcock_windform_screening_recreational_drugs_quest=    {table_id:'20009077',var:v,url:B+'/modules/task_screening/recreational_drugs.form.html'};
        L.woolcock_windform_screening_sleep_disorders_and_patterns=          {table_id:'20009078',var:v,url:B+'/modules/task_screening/sleep_disorders_and_patterns_WF.html',notes:'Sleep Disorders & Patterns',form_module:A+'screening_sleep_disorders_and_patterns_quest',task:'Sleep Disorders & Patterns'};
        L.woolcock_windform_screening_sleep_disorders_and_patterns_quest=    {table_id:'20009078',var:v,url:B+'/modules/task_screening/sleep_disorders_and_patterns_WF.form.html'};
        L.woolcock_windform_screening_shiftwork=          {table_id:'20009079',var:v,url:B+'/modules/task_screening/shiftwork_WF.html',notes:'Shift work',form_module:A+'screening_shiftwork_quest',task:'Shift work'};
        L.woolcock_windform_screening_shiftwork_quest=    {table_id:'20009079',var:v,url:B+'/modules/task_screening/shiftwork_WF.form.html'};
        L.woolcock_windform_screening_ess=              {table_id:'20009080',var:v,url:B+'/modules/task_screening/ess.html',notes:'Epworth Sleepiness Scale',form_module:A+'screening_ess_quest',task:'Epworth Sleepiness Scale'};
        L.woolcock_windform_screening_ess_quest=        {table_id:'20009080',var:v,url:B+'/modules/task_screening/ess.form.html'};
        L.woolcock_windform_screening_homecq=           {table_id:'20009081',var:v,url:B+'/modules/task_screening/homecq.html',notes:'Horne and Ostberg Morningness-Eveningness Composite Questionnaire',form_module:A+'screening_homecq_quest',task:'Horne and Ostberg Morningness-Eveningness Composite Questionnaire'};
        L.woolcock_windform_screening_homecq_quest=     {table_id:'20009081',var:v,url:B+'/modules/task_screening/homecq.form.html'};
        L.woolcock_windform_screening_psqi=             {table_id:'20009082',var:v,url:B+'/modules/task_screening/psqi.html',notes:'Pittsburgh Sleep Quality Index',form_module:A+'screening_psqi_quest',task:'Pittsburgh Sleep Quality Index'};
        L.woolcock_windform_screening_psqi_quest=       {table_id:'20009082',var:v,url:B+'/modules/task_screening/psqi.form.html'};
        L.woolcock_windform_screening_kessler=          {table_id:'20009083',var:v,url:B+'/modules/task_screening/kessler.html',notes:'Kessler - 10',form_module:A+'screening_kessler_quest',task:'Kessler - 10'};
        L.woolcock_windform_screening_kessler_quest=    {table_id:'20009083',var:v,url:B+'/modules/task_screening/kessler.form.html'};
        L.woolcock_windform_screening_dass=             {table_id:'20009084',var:v,url:B+'/modules/task_screening/dass.html',notes:'Depression Anxiety Stress Scale',form_module:A+'screening_dass_quest',task:'Depression Anxiety Stress Scale'};
        L.woolcock_windform_screening_dass_quest=       {table_id:'20009084',var:v,url:B+'/modules/task_screening/dass.form.html'};
        L.woolcock_windform_screening_claustrophobia_rs_scale=      {table_id:'20009085',var:v,url:B+'/modules/task_screening/claustrophobia_rs_scale.html',notes:'Restriction subscale of Claustrophobia Questionnaire',form_module:A+'screening_claustrophobia_rs_scale_quest',task:'Restriction subscale of Claustrophobia Questionnaire'};
        L.woolcock_windform_screening_claustrophobia_rs_scale_quest={table_id:'20009085',var:v,url:B+'/modules/task_screening/claustrophobia_rs_scale.form.html'};
        L.woolcock_windform_screening_connor_davidson_resilence=      {table_id:'20009086',var:v,url:B+'/modules/task_screening/connor_davidson_resilence.html',notes:'Connor-Davidson Resilience Scale',form_module:A+'screening_connor_davidson_resilence_quest',task:'Connor-Davidson Resilience Scale'};
        L.woolcock_windform_screening_connor_davidson_resilence_quest={table_id:'20009086',var:v,url:B+'/modules/task_screening/connor_davidson_resilence.form.html'};
        L.woolcock_windform_screening_eysneck=         {table_id:'20009087',var:v,url:B+'/modules/task_screening/eysneck.html',notes:'Eysneck',form_module:A+'screening_eysneck_quest',task:'Eysneck'};
        L.woolcock_windform_screening_eysneck_quest=   {table_id:'20009087',var:v,url:B+'/modules/task_screening/eysneck.form.html'};
        L.woolcock_windform_screening_hwpq=             {table_id:'20009088',var:v,url:B+'/modules/task_screening/hwpq_WF.html',notes:'Health and Work Performance Questionnaire',form_module:A+'screening_hwpq_quest',task:'Health and Work Performance Questionnaire'};
        L.woolcock_windform_screening_hwpq_quest=       {table_id:'20009088',var:v,url:B+'/modules/task_screening/hwpq_WF.form.html'};
        //L.woolcock_windform_screening_tinnitus=         {table_id:'20009090',var:v,url:B+'/modules/task_screening/tinnitus.html',notes:'Tinnitus Handicap Inventory',form_module:A+'screening_tinnitus_quest',task:'Tinnitus Handicap Inventory'};
        //L.woolcock_windform_screening_tinnitus_quest=   {table_id:'20009090',var:v,url:B+'/modules/task_screening/tinnitus.form.html'};
        //L.woolcock_windform_screening_dizziness=         {table_id:'20009091',var:v,url:B+'/modules/task_screening/dizziness.html',notes:'Dizziness Handicap Inventory',form_module:A+'screening_dizziness_quest',task:'Dizziness Handicap Inventory'};
        //L.woolcock_windform_screening_dizziness_quest=   {table_id:'20009091',var:v,url:B+'/modules/task_screening/dizziness.form.html'};
        L.woolcock_windform_screening_consent2=                   {table_id:'20008713',var:v,url:B+'/modules/task_screening/consent2.html',form_module:A+'screening_consent2_quest',notes:'Consent 2',task:'Consent 2'};
        L.woolcock_windform_screening_consent2_quest=             {table_id:'20008713',var:v,url:B+'/modules/task_screening/consent2.form.html'};

        L.woolcock_windform_screening_thank_you_part_1=         {table_id:'20009190',var:v,url:B+'/modules/task_screening/eligibility_check_thank_you_page.html',form_module:A+'screening_thank_you_part_1_form',task:'Eligibility Check'};
        L.woolcock_windform_screening_thank_you_part_1_form=         {table_id:'20009190',var:v,url:B+'/modules/task_screening/eligibility_check_thank_you_page.form.html'};
}
_screening_task_list__ID();
