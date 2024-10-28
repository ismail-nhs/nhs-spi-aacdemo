// import accessibleAutocomplete from 'accessible-autocomplete'

var countries = ['13Q_FLAG', 'AUDIO_REQD', 'BOOKED_APPOINTMENT_DATE', 'BOOKED_APPOINTMENT_PROVIDER', 'BRAILLE_REQD', 'CARE_HOME_FLAG', 'COMISSIONING_REGION', 'COVID_FLU', 'COVID-19', 'DATE_OF_BIRTH', 'DAYS_SINCE_LAST_PROCEDURE', 'DE_FLAG', 'EMAIL_FLAG', 'FLU', 'GENDER', 'GP_PRACTICE_CODE', 'ICB', 'LANGUAGE_PREFERENCE', 'LAST_COMMS_BATCH', 'LAST_COMMS_CHANNEL', 'LAST_COMMS_DATE', 'LAST_COMMS_STATUS', 'LAST_COMMS_TYPE', 'LAST_INVITE_BATCH', 'LAST_INVITE_CHANNEL', 'LAST_INVITE_COHORT', 'LAST_INVITE_DATE', 'LAST_INVITE_STATUS', 'LAST_INVITE_TYPE', 'LAST_PROCEDURE', 'LAST_PROCEDURE_DATE', 'LAST_SUCCESSFUL_AMP', 'LAST_SUCCESSFUL_DATE', 'LAST_SUCCESSFUL_DOSE', 'LAST_SUCCESSFUL_PROCEDURE', 'LD_FLAG', 'MMR', 'MOBILE_FLAG', 'OPTOUT', 'PCN', 'POSTCODE', 'PRIMARY_SERIES_COMPLETE', 'SUCCESSFUL_PROCEDURE_COUNT', 'TELEPHONE_FLAG'];
var plainEng = ['COVID-19 - COVID-19', 'COVID-19 + Flu (Co-admin) - COVID_FLU', 'Flu - FLU', 'Mumps, Measles and Rubella - MMR', 'Booked Appointment Date - BOOKED_APPOINTMENT_DATE', 'Booked Appointment Provider - BOOKED_APPOINTMENT_PROVIDER', 'Days Since Last Procedure (Jab) - DAYS_SINCE_LAST_PROCEDURE', 'Last Batch ID sending Comms - LAST_COMMS_BATCH', 'Last Communication Channel(s) - LAST_COMMS_CHANNEL', 'Last Communicaiton Date - LAST_COMMS_DATE', 'Last Communication Status - LAST_COMMS_STATUS', 'Last Communication Type (I or R) - LAST_COMMS_TYPE', 'Last Batch ID eligible for invite - LAST_INVITE_BATCH', 'Last Invite Channel - LAST_INVITE_CHANNEL', 'Last Invite Cohort - LAST_INVITE_COHORT', 'Last Invite Date - LAST_INVITE_DATE', 'Last Invite Status - LAST_INVITE_STATUS', 'Last Invite Type (I or R) - LAST_INVITE_TYPE', 'Last Procedure Code (May be not given) - LAST_PROCEDURE', 'Last Procedure Date (May be not given) - LAST_PROCEDURE_DATE', 'Last Procedure Product SNOMED (AMP) - LAST_SUCCESSFUL_AMP', 'Last Successful Procedure Date - LAST_SUCCESSFUL_DATE', 'Last Successful Procedure Dose Number - LAST_SUCCESSFUL_DOSE', 'Last Successful Procedure Code - LAST_SUCCESSFUL_PROCEDURE', 'Opted Out of Communications - OPTOUT', 'Primary Seriese Complete (Do not use) - PRIMARY_SERIES_COMPLETE', 'Number of successful procedures known - SUCCESSFUL_PROCEDURE_COUNT', '13Q Flag (DMS) - 13Q_FLAG', 'Audio Format Required - AUDIO_REQD', 'Braille Format Required - BRAILLE_REQD', 'Care Home Flag - CARE_HOME_FLAG', 'Commissioning Region - COMISSIONING_REGION', 'Date of Birth - DATE_OF_BIRTH', 'Detained Estate Flag - DE_FLAG', 'Email Address Available Flag - EMAIL_FLAG', 'Gender - GENDER', 'GP Practice ODS Code - GP_PRACTICE_CODE', 'ICB ODS Code - ICB', 'Language Preference Flag - LANGUAGE_PREFERENCE', 'Learning Difficulty/Reasonable Adjustment - LD_FLAG', 'Mobile Phone Number Available Flag - MOBILE_FLAG', 'PCN ODS Code - PCN', 'Postcode - POSTCODE', 'Landline Available Flag - TELEPHONE_FLAG'];
var regionList = ['East of England', 'London', 'Midlands', 'North East and Yorkshire', 'North West', 'South East', 'South West'];
var ICBlist = ['NHS Bath and North East Somerset, Swindon and Wiltshire Integrated Care Board', 'NHS Bedfordshire, Luton and Milton Keynes Integrated Care Board', 'NHS Birmingham and Solihull Integrated Care Board', 'NHS Black Country Integrated Care Board', 'NHS Bristol, North Somerset and South Gloucestershire Integrated Care Board', 'NHS Buckinghamshire, Oxfordshire and Berkshire West Integrated Care Board', 'NHS Cambridgeshire and Peterborough Integrated Care Board', 'NHS Cheshire and Merseyside Integrated Care,Board', 'NHS Cornwall and the Isles of Scilly Integrated Care Board', 'NHS Coventry and Warwickshire Integrated Care Board', 'NHS Derby and Derbyshire Integrated Care Board', 'NHS Devon Integrated Care Board', 'NHS Dorset Integrated Care Board', 'NHS Frimley Integrated Care Board', 'NHS Gloucestershire Integrated Care Board', 'NHS Greater Manchester Integrated Care Board', 'NHS Hampshire and Isle of Wight Integrated Care Board', 'NHS Herefordshire and Worcestershire Integrated Care Board', 'NHS Hertfordshire and West Essex Integrated Care Board', 'NHS Humber and North Yorkshire Integrated Care Board', 'NHS Kent and Medway Integrated Care Board', 'NHS Lancashire and South Cumbria Integrated Care Board', 'NHS Leicester, Leicestershire and Rutland Integrated Care Board', 'NHS Lincolnshire Integrated Care Board', 'NHS Mid and South Essex Integrated Care Board', 'NHS Norfolk and Waveney Integrated Care Board', 'NHS North Central London Integrated Care Board', 'NHS North East and North Cumbria Integrated Care Board', 'NHS North East London Integrated Care Board', 'NHS North West London Integrated Care Board', 'NHS Northamptonshire Integrated Care Board', 'NHS Nottingham and Nottinghamshire Integrated Care Board', 'NHS Shropshire, Telford and Wrekin Integrated Care Board', 'NHS Somerset Integrated Care Board', 'NHS South East London Integrated Care Board', 'NHS South West London Integrated Care Board', 'NHS South Yorkshire Integrated Care Board', 'NHS Staffordshire and Stoke-on-Trent Integrated Care Board', 'NHS Suffolk and North East Essex Integrated Care Board', 'NHS Surrey Heartlands Integrated Care Board', 'NHS Sussex Integrated Care Board', 'NHS West Yorkshire Integrated Care Board'];
var newICB = ['NHS Bath and North East Somerset, Swindon and Wiltshire Integrated Care Board (QOX)', 'NHS Bedfordshire, Luton and Milton Keynes Integrated Care Board (QHG)', 'NHS Birmingham and Solihull Integrated Care Board (QHL)', 'NHS Black Country Integrated Care Board (QUA)', 'NHS Bristol, North Somerset and South Gloucestershire Integrated Care Board (QUY)', 'NHS Buckinghamshire, Oxfordshire and Berkshire West Integrated Care Board (QU9)', 'NHS Cambridgeshire and Peterborough Integrated Care Board (QUE)', 'NHS Cheshire and Merseyside Integrated Care Board (QYG)', 'NHS Cornwall and the Isles of Scilly Integrated Care Board (QT6)', 'NHS Coventry and Warwickshire Integrated Care Board (QWU)', 'NHS Derby and Derbyshire Integrated Care Board (QJ2)', 'NHS Devon Integrated Care Board (QJK)', 'NHS Dorset Integrated Care Board (QVV)', 'NHS Frimley Integrated Care Board (QNQ)', 'NHS Gloucestershire Integrated Care Board (QR1)', 'NHS Greater Manchester Integrated Care Board (QOP)', 'NHS Hampshire and Isle of Wight Integrated Care Board (QRL)', 'NHS Herefordshire and Worcestershire Integrated Care Board (QGH)', 'NHS Hertfordshire and West Essex Integrated Care Board (QM7)', 'NHS Humber and North Yorkshire Integrated Care Board (QOQ)', 'NHS Kent and Medway Integrated Care Board (QKS)', 'NHS Lancashire and South Cumbria Integrated Care Board (QE1)', 'NHS Leicester, Leicestershire and Rutland Integrated Care Board (QK1)', 'NHS Lincolnshire Integrated Care Board (QJM)', 'NHS Mid and South Essex Integrated Care Board (QH8)', 'NHS Norfolk and Waveney Integrated Care Board (QMM)', 'NHS North Central London Integrated Care Board (QMJ)', 'NHS North East and North Cumbria Integrated Care Board (QHM)', 'NHS North East London Integrated Care Board (QMF)', 'NHS North West London Integrated Care Board (QRV)', 'NHS Northamptonshire Integrated Care Board (QPM)', 'NHS Nottingham and Nottinghamshire Integrated Care Board (QT1)', 'NHS Shropshire, Telford and Wrekin Integrated Care Board (QOC)', 'NHS Somerset Integrated Care Board (QSL)', 'NHS South East London Integrated Care Board (QKK)', 'NHS South West London Integrated Care Board (QWE)', 'NHS South Yorkshire Integrated Care Board (QF7)', 'NHS Staffordshire and Stoke-on-Trent Integrated Care Board (QNC)', 'NHS Suffolk and North East Essex Integrated Care Board (QJG)', 'NHS Surrey Heartlands Integrated Care Board (QXU)', 'NHS Sussex Integrated Care Board (QNX)', 'NHS West Yorkshire Integrated Care Board (QWO)'];
var commsRouting = ['VACCS0001_COVID_CHILD_INV_R1_R2_V1', 'VACCS0012_COVID_75PLUS_65PLUSIS_R2_V2', 'VACCS0013_COVID_16TO64_IS_R2_V1', 'VACCS0016_COVID_CHILD_EMAIL_V1', 'VACCS0017_COVID_16TO64_EMAIL_V1', 'VACCS0018_COVID_65PLUS_EMAIL_V1'];

// accessibleAutocomplete({
//   minLength: 1,
//   confirmOnBlur: true,
//   showAllValues: true,
//   placeholder: "Select ICBs",
//   element: document.querySelector('#my-autocomplete-container'),
//   id: 'my-autocomplete', // To match it to the existing <label>.
//   source: newICB
// })

accessibleAutocomplete({
  minLength: 1,
  confirmOnBlur: true,
  showAllValues: true,
  placeholder: "Search",
  element: document.querySelector('#attribSearch-container'),
  id: 'attribSearch',
  // To match it to the existing <label>.
  source: ICBlist
});

// accessibleAutocomplete({
//   minLength: 1,
//   confirmOnBlur: true,
//   showAllValues: true,
//   placeholder: "Search",
//   element: document.querySelector('#other-container'),
//   id: 'otherSearch', // To match it to the existing <label>.
//   source: countries
// })

accessibleAutocomplete({
  minLength: 1,
  confirmOnBlur: true,
  showAllValues: true,
  placeholder: "Search",
  element: document.querySelector('#region-container'),
  id: 'regionSearch',
  // To match it to the existing <label>.
  source: regionList
});