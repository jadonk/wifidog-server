var hostapd = require(__dirname + '/../lib/hostapd');
var child_process = require('child_process');
var options = {
     driver: 'nl80211',
     ssid: 'BeagleBone',
     country_code: 'US',
     interface: 'SoftAp0',
     hw_mode: 'g',
  //   wpa: 2
  //   wpa_passphrase: BeagleBone  
     logger_syslog: -1,
     logger_syslog_level: 2,
     logger_stdout: -1,
     logger_stdout_level: 2,
     ieee80211d: 1,
     ieee80211h: 1,
     ap_channel_sync: 1,
     beacon_int: 100,
     dtim_period: 2,
     max_num_sta: 10,
     supported_rates: '10 20 55 110 60 90 120 180 240 360 480 540',
     basic_rates: '10 20 55 110 60 120 240' ,
     preamble: 1,
     macaddr_acl: 0,
     auth_algs: 3,
     ignore_broadcast_ssid: 0,
     tx_queue_data3_aifs: 7,
     tx_queue_data3_cwmin: 15,
     tx_queue_data3_cwmax: 1023,
     tx_queue_data3_burst: 0,
     tx_queue_data2_aifs: 3,
     tx_queue_data2_cwmin: 15,
     tx_queue_data2_cwmax: 63,
     tx_queue_data2_burst: 0,
     tx_queue_data1_aifs: 1,
     tx_queue_data1_cwmin: 7,
     tx_queue_data1_cwmax: 15,
     tx_queue_data1_burst: 3.0,
     tx_queue_data0_aifs: 1,
     tx_queue_data0_cwmin: 3,
     tx_queue_data0_cwmax: 7,
     tx_queue_data0_burst: 1.5,
     wme_enabled: 1,
     uapsd_advertisement_enabled: 1,
     wme_ac_bk_cwmin: 4,
     wme_ac_bk_cwmax: 10,
     wme_ac_bk_aifs: 7,
     wme_ac_bk_txop_limit: 0,
     wme_ac_bk_acm: 0,
     wme_ac_be_aifs: 3,
     wme_ac_be_cwmin: 4,
     wme_ac_be_cwmax: 10,
     wme_ac_be_txop_limit: 0,
     wme_ac_be_acm: 0,
     wme_ac_vi_aifs: 2,
     wme_ac_vi_cwmin: 3,
     wme_ac_vi_cwmax: 4,
     wme_ac_vi_txop_limit: 94,
     wme_ac_vi_acm: 0,
     wme_ac_vo_aifs: 2,
     wme_ac_vo_cwmin: 2,
     wme_ac_vo_cwmax: 3,
     wme_ac_vo_txop_limit: 47,
     wme_ac_vo_acm: 0,
     ap_max_inactivity: 10000,
     disassoc_low_ack: 1,
     ieee80211n: 1,
     ht_capab: '[SHORT-GI-20][GF]',
     wep_rekey_period: 0,
     eap_server: 1,
     own_ip_addr: '127.0.0.1',
     wpa_group_rekey: 0,
     wpa_gmk_rekey: 0,
     wpa_ptk_rekey: 0,
     ap_table_max_size: 255,
     ap_table_expiration_time: 60,
     wps_state: 2,
     ap_setup_locked: 1,
     uuid: '12345678-9abc-def0-1234-56789abcdef0',
     device_name: 'Sitara',
     manufacturer: 'TexasInstruments',
     model_name: 'TI_Connectivity_module',
     model_number: 'wl18xx',
     serial_number: 12345,
     device_type: '0-00000000-0',
     config_methods: 'virtual_display virtual_push_button keypad'
};
// hostapd.enable(options,function(err){
    // console.log("hostname:"+err);
// });
// hostapd.disable(options.interface ,function(err){
    // console.log("hostname:"+err);
// });
var last = child_process.exec('pgrep -f "hostapd -B SoftAp0-hostapd.conf"',function(err) {
    console.log(err); 
});
last.stdout.on('data', function (data) {
    console.log(last.pid);
    console.log("hostapd start"+data);
    if(data != last.pid){
        console.log("hostapd start");
    }
});