module.exports = function(country){
  'use strict';
  var na = ['US', 'CA', 'BM', 'GL', 'PM'];
  var apac = ['TW', 'HK', 'SG', 'ID', 'TH', 'MY', 'PH', 'VN', 'LA', 'KH', 'MM', 'BN', 'KR', 'AU', 'NZ', 'PK', 'BD', 'LK', 'NP', 'BT', 'AU', 'NZ'];
  var emea = ['AL','AD','AM','AZ','BE','BA','BG','HR','CY','CZ','DK','EE','FI','GE','GR','HU','IS','IE','IT','LV','LT','LU','MK','MT','MD','ME','NL','NO','PL','PT','RO','SM','RS','SK','SI','ES','SE','CH','TR','GB','BH','EG','IR','IQ','IL','JO','KW','LB','OM','PS','QA','SA','SY','AE','YE','ER','ET','KE','MW','MU','MZ','RW','SC','SO','SS','TZ','UG','ZM','ZW','AO','CM','ST','LY','SD','BW','LS','NA','ZA','SZ','CV','GM','GH','GW','LR','NG','SH','SL','FR','MC','BJ','BF','BI','CF','TD','KM','CG','CI','CD','DJ','GQ','GA','GN','MG','ML','NE','SN','TG','YT','RE','DZ','MR','MA','TN','DE','AT','LI'];
  var eu = ['TR', 'CH', 'BE', 'AT', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IS', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'UK'];
  var sa = ['AR', 'BO', 'BR', 'CL', 'CO', 'EC', 'FK', 'GY', 'PY', 'PE', 'SR', 'UY', 'VE'];
  if (na.indexOf(country) > -1) {
    return 'NA';
  }else if (apac.indexOf(country) > -1) {
    return 'APAC';
  }else if(emea.indexOf(country) > -1) {
    return 'EMEA';
  }else if(eu.indexOf(country) > -1) {
    return 'EU';
  }else if(sa.indexOf(country) > -1) {
    return 'CA';
  }else{
    return false;
  }
};