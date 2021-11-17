const urls = [
  {
    name: "Admin Reload",
    url: "https://lh5.googleusercontent.com/l_ZwYghH4Aovu9r-P6VwaLZNSv73oT3jjWd26NbcNy_clkS_v8Fj8HokOKV3sMBuXrghtgebL9YW8zzrLPFJUTYIaeyiidFwWUQea1P3Dj7FlrC1ljkDEwX_xXxPk77e04ZXWGDjMw=w209-h317",
  },
  {
    name: "Adrenaline Fueled",
    url: "https://lh3.googleusercontent.com/OiZBNV7HfrPkuCQB_JZazzNYQl5M1tWk9MhG5uQidsGi8OL1r1hyVpTnju6eFFHoEwZaRUyszW0risKRlPVp1SY6L0U8Nb173R8jGDdvzz15JwZX-s7jiKHgdVDdNhUPUozR141SIA=w209-h317",
  },
  {
    name: "Ammo Belt",
    url: "https://lh5.googleusercontent.com/dhKR5MYcIUd_heKRE6o0elYXOp4vaBb3w8rAKJkZkPmt8QZ-_i9r1oZmbdKRlXvB65aoqxWyxjXwr8lVTC-p9UPtReDTJFIMhLMCks3CptiDV0W-4QQZTqRSriYEcurVPQCx2XuqqA=w209-h317",
  },
  {
    name: "Ammo For All",
    url: "https://lh5.googleusercontent.com/bR_1_QzuovrMcecAxzDPVX2QmdF-jJZgKOahrNXj6HKosccbszOYUewnGskwyIvOganVQS4NixtnvOJ7Et97QgHE1hi0OmQGxKB7p6fGa66pws-wYJPMo2ae77u2wYlvC_M9UUe5vw=w209-h317",
  },
  {
    name: "Ammo Mule",
    url: "https://lh5.googleusercontent.com/I8PX-PqAkJvpkA1YrVxGnUcTsLEEkZiWMC9Zad3aIndJSxoXIdsSfH0nigc4pt53aE2bBX_hZNNjmaB2FrmnarofrobB8YC3neRlQWWKrv1DOVLf0AhhHGi03tnqHfYU6exbN9VBTw=w209-h317",
  },
  {
    name: "Ammo Pouch",
    url: "https://lh5.googleusercontent.com/uyTY9D9yYhbgNyQAC57kego4GNWq3fobfhEzgQ7omLLXbCyXgN54PcswT-OKtDy4bhRspapLoL7e3ab8WnL8iPs-Wq0RCUbAjPazvdZaSxItVfgXwtbgDaBG0C_cpExfCJQRWUtBng=w209-h317",
  },
  {
    name: "Ammo Scavenger",
    url: "https://lh4.googleusercontent.com/gLRqIrEPCYBPydX2VHzczcei1Ar2lH2pyiOmNrTjRBVXlZQT9hgz9wCVrcz59BAp9KSWmEjFB02inh5-4dcG4XYfI_50DZMXLG54hVE7S6rwpsPtVSFhrsmmKltKFoJk0Xs4McbhCA=w209-h317",
  },
  {
    name: "Ammo Stash",
    url: "https://lh4.googleusercontent.com/sI_x9NCD82pRP4fVLDNU68xGnUiXy8zLXBm-HyEejQU2NbumzaTWu3udyu4255t57Y1D67NbwJzXYRtU_9LYgFUbF3UEijI9ulibk6-n-t_6HmCKX3paTDjpdT3OrHF0raija6gLPA=w209-h317",
  },
  {
    name: "Amped Up",
    url: "https://lh5.googleusercontent.com/wX3l13a-SBz_z3-5yPOj2XVSJBXGqNqYK4cqatDZNP3n1JDjSDhf9PKO_ePzoATg-iSjXkbtJ8-GjK0JOE-hX-vsjn9kh1EFRUvpJqUOLHwHdaC3C_eZSRG2LwYai_CKuLQRwpUB8g=w209-h317",
  },
  {
    name: "Antibiotic Ointment",
    url: "https://lh4.googleusercontent.com/SAKuJnrvrsvSNHHg64194s6THaTw7OWPGPiI8c8ZDqjr1s3U9D3fUqymBiwbaKOQtGV3L6A9hMxlSEUC22MBYb5dIPHA3aIByXTH917566Ur6O_o5ufaCzeq-K0A-W56VcVKNiputg=w209-h317",
  },
  {
    name: "Avenge the Fallen",
    url: "https://lh6.googleusercontent.com/zJVZb-it1CyKx7xRvvjyOzJVTWm65JUDIQ6gnG0kmy0L6khAopXUQajsLc7xjk_5NOZKCdUCirbCQDm4QmmevyJ3_4ckQoq_lwUHRQfu8W-qjB4l2JyHCqtS7RDssFQUVH7J09laLw=w209-h317",
  },
  {
    name: "Batter Up",
    url: "https://lh3.googleusercontent.com/qTiFiT1HOOio9ns1ardhMZ38xMwkQyNnFRfYGe-fdPOzhu0bwUdzlo89jORZWnVLxqpjRYosS6nLmvKFjgEo6JMTnUo4JcYunma0u_hlAKOs2amncxvy01ghoFwS6fhBRhqBfsITyw=w209-h317",
  },
  {
    name: "Battle Lust",
    url: "https://lh3.googleusercontent.com/seyuAow1W-aLU-MRzn9lHoo4ncwarJ0ImB4mR2CcbX6M7Mr_E5lkSrU11SO0MDhNGQBI6Z2VCH81uF5rlX2SConLm0Vo9T9Ue52RZw480AsrvTiS0ml6uBXMbZ0eo7cPKze4l1orYQ=w209-h317",
  },
  {
    name: "Berserker",
    url: "https://lh4.googleusercontent.com/CB9d-vAy03px1jwxWlFrJq_HoUtd6TtDAdwTn9KhzKXTa8QWBsadSsStToYM4ufuKDRw6idXWjN7WSEJn3oWHn9cbfQHmIi3R3E5WORmcHSHwxERiP8oQVuDoJKXGSJYCtaaI60d0w=w209-h317",
  },
  {
    name: "Body Armor",
    url: "https://lh6.googleusercontent.com/E4lVJ3yYCdcwSIPwQ1FCQbml8xMi5dljvYpF6Wj3rSXaWoiJvPH_5fy7KtLCg3o6bQLTA3-JqofZWO7iAkmNsLoDRdUdtPxpD9m6xxPcregLftWAS5HmeuTCnf41YFRZJ8aXYV-_aw=w209-h317",
  },
  {
    name: "Bomb Squad",
    url: "https://lh3.googleusercontent.com/_pTKN0pCH_l4aNNg527hK_LlX6OcBrt8nx9b7H0KbUFgAwAqMM3P_isbNrPPIVa3Z5lqFWuxkVadwxkvjtDPrhdBv5pFX82Agxj6aAoFKryIX3Vmu6ORdYijK3aw-SJJxCVu1lzatg=w209-h317",
  },
  {
    name: "Bounty Hunter",
    url: "https://lh3.googleusercontent.com/U97r_F5QVlSJrQsCdbZ5TFKXDe8GRcvBdJUZo22I2us7u3gDf5rLhOx-V23AKNZZKylh-sCuelIdoMR2j7z1_V-SgwBfM1s-iZLC-VxOpWLlaZlX0Jseq0SGlucT5sKvbxOq6RKpoA=w209-h317",
  },
  {
    name: "Box O' Bags",
    url: "https://lh5.googleusercontent.com/zCdhpSK98n14NCJ6k09CPsKnnm57Hazt1yk4l8cTgPpPwPhdXdGaUAh5AIWpe60HNqYj2kx1c5ScAQOh74F1EV1sAijM0aGdlHow9sKN7b_0kcVlEzKrhYs-0d2L8cYy2lNIl47E2Q=w209-h317",
  },
  {
    name: "Brazen",
    url: "https://lh5.googleusercontent.com/rYQOh2UKx13FUzbw-T4E4hfjp9UgNt4SSTSmjbw9-F1MbHb7H6Wld4A-u8B6gNdKdRgVtnsslsyEp2zV5h1fx_xxiG-bpL2P_RVjJsnYjjX62JdhQPhTGXNomvYYNAjxUXAItKb8YQ=w209-h317",
  },
  {
    name: "Breakout",
    url: "https://lh6.googleusercontent.com/gCaimehPl_9nGRnWaVEfUY9iEqsRwctbhMXFnFc4pKlwEmQIds11ZEFtkX-Tf5HhqaFYVVDhuTHVz9t_oxwg2BZCKS8zlwE5zu1dPSH8Crv5ohSgIRjlmrVANMCx0oB3sUgtcrS6kw=w209-h317",
  },
  {
    name: "Broadside",
    url: "https://lh5.googleusercontent.com/2p5Xw83iKIRhU8bcUY9Ra74i9-wIWA7LdE7Bn89NlToA3toOFUp9mS_SZNsN2TfU_Agbmqn4ioXcZ83n7eYvLYPrjoz7aMSTVc2tNojew6YBp9wuuvcHjtn9xXFLLfseAAOd830xvw=w209-h317",
  },
  {
    name: "Buckshot Bruiser",
    url: "https://lh3.googleusercontent.com/2vEVNEEc1mQhcBT6EatJl0YrHt9Lr62Z2SokEjH-8tqCfqvz8Q3CjRSVQnGZQq5L0QmDXAf4OOLYKZ8kxSDHLvdX0kYsF9sN3av_NgdfKxvepyvbIWDi7PAA1oxcRI-Z_bzefZJAvg=w209-h317",
  },
  {
    name: "Canned Goods",
    url: "https://lh3.googleusercontent.com/ixGzMx9ShF507vOrVAT_87W5PawmmxREV7ivwUUkZd-GQejEzJL8yqL8qXtdsHHzVGtViiNA5B7NbRwNqlT2UNTnXAG_xuEB-gIQ28mnSWBtWo6oqUZg9gUbuOjghKUggYslItwOfw=w209-h317",
  },
  {
    name: "Charitable Soul",
    url: "https://lh6.googleusercontent.com/JIlHdyhPRLVWunSrH6Ijz56Sf7BkBMa0LUAIg8fTXsAu2QkLhEDKKi8zSFAqi2MTe1BTKTMiDNEBTrPsw4-xtqmvyQcVoggO38tfHmtHL2BwFO4h8JoCR_JvmceVPFRthlQeKuzmMQ=w209-h317",
  },
  {
    name: "Chemical Courage",
    url: "https://lh5.googleusercontent.com/hx2I6Qn_wSaupSdjHNj9NxufoAKZqZmupZcveEQTKZcv3nA3USvxRvQoevGH-EktbBAHm9sYqI1dZrAKRYqHGUaPwzQuiV7yhTMAi1T15c2bgiC5CXA64MOJZUBvaoRRvMK0lgvknA=w209-h317",
  },
  {
    name: "Cocky",
    url: "https://lh6.googleusercontent.com/ajTRPCajB6AiZmN-N0Gqt3NAqbc9SpreiILZELVrO6avfTmT41jlmfqwLOvgddgCgsdQfFZx4pugEYrsS1caBC9gWpUnCNI53vxhU15w4z5rRtBVg5065i81ZwVVxEBvH5KF2Coy4Q=w209-h317",
  },
  {
    name: "Cold Brew Coffee",
    url: "https://lh5.googleusercontent.com/MtBy8KVBmduU4AZyJrYbgxzz2IoQ_2nAWi5XxYsgpckq_vPnYzuUC-8EDhsK3m8Pw9f_s8sbwzYkhLN-5qhTi0AO4wx94FmlBxKEvqwmeOU332VojFNcEuInEDGgWM4iRRr1jJ4eug=w209-h317",
  },
  {
    name: "Combat Knife",
    url: "https://lh3.googleusercontent.com/fQyUi8-XWTdvNQ5nbPKoPCed5LEBe4Ilwfz15MB-s_ZHdslNvcEHuusxP5Wf5dPctxR0OEHYMNOn9XG3UMM4KKQc0vPXkjcJwm9giS7n8MFmgpEw819fBYBx2AMI702SO5IyKSrRkw=w209-h317",
  },
  {
    name: "Combat Medic",
    url: "https://lh6.googleusercontent.com/dZg6ZaK1W2ZxEKOqSJbUPRZg1iHWZeWgB7fjR3hw5Bo9v72V6zWF4_oxFn-2qh3S8o9ZltdhXFKnS7ih8apOY4UdhtNmWqT-TRuF1dxntc2UC6R5z0vEAWBFDMLjIPoeO0kip7nk8A=w209-h317",
  },
  {
    name: "Combat Training",
    url: "https://lh3.googleusercontent.com/N543k_JNt9W9YhpiUktRNZI6m4AgT4kWNIqAsjHCMMST4sbeYEUvTKc1TGSCaYSsX-SGtoMv1GKiYQN0U2hK9u_EU0Wm_mDe_UdNzOZkgvaACCef339WOo_Lw0zDoetrrwarPUexJQ=w209-h317",
  },
  {
    name: "Compound Interest",
    url: "https://lh5.googleusercontent.com/8lUK_Zp0IrY_vNSHZ6SYHdOmAsrRVHWoAtRBHRL1FXdKzfMhagkn3CniNIN0pVPJHn-_BOdytRIlcPcG37ssC4WnagdUxU4Qu6Qo74FdmSIZXnjMKjvAtiT8vk0tuDRKN-IYZ-D3sw=w209-h317",
  },
  {
    name: "Confident Killer",
    url: "https://lh3.googleusercontent.com/L-FLf8FSFWCmz1cPdHE2HvMk6PGM-rQAeoeL5KYwwDo5wShb82UD3cikDxwFfaGv16O2JIkhE2CLA1ziNpuGplJKgNoxYOP0MalwEgptVOOOfEKx1Vsprkw4RfkeU56ds8cmiw4bqQ=w209-h317",
  },
  {
    name: "Controlled Movement",
    url: "https://lh4.googleusercontent.com/T28d9uKAVvmp85VojxGAfjgff5sdeWbcy73XzWaarpCUBk7p0pi_n3MV4znMrTEV0D3ftGRtcQCiGBWvMwGBsNvfsg1_ziaoBqQ-NFDe-U8isZYJZOzUfNg7RvOJc1p1u8l5U1wv5A=w209-h317",
  },
  {
    name: "Copper Scavenger",
    url: "https://lh6.googleusercontent.com/hVMcHTYLPqMF4rQ9sYip4ksQjBOpd4-CzIaQFvbGs083z7EpANX_4RVuuLr2awrJD0WhwbAcqpjV3xWfJwlixXEN-_-GTjBbpKvMIn-e8h5nkIJEPUExHfMsS9dtVxUPI46Uzmx5XA=w209-h317",
  },
  {
    name: "Cross Trainers",
    url: "https://lh6.googleusercontent.com/eeMq2uO4VrnOA7ESW5OfbjK87GElzKmcLr-BsDSrX87A_pJSV8oz3D8WzoUv_MIrEIuNhOrt3beEtPRuBGb1-9wf3-qal-pl4_wcJkpuqoU3YNPfLq4qzgf8RbpBZsrZuWH45cb6pg=w209-h317",
  },
  {
    name: "Dash",
    url: "https://lh5.googleusercontent.com/vwjAqtR-viTQhc7lWYQkD4BiusR_MM6Akamze1GRZyz1UNEPrbrT8H-xFeC9CJyXgJeRpZzo-ppkDKpRrTvdpLPn47PGwFhs4yKAAyUyADj--2mPzX0CRGTM06DrJr9m39oW819PVQ=w209-h317",
  },
  {
    name: "Demolitions Expert",
    url: "https://lh3.googleusercontent.com/Bc6id3QUi6uQzRtgKFcZ5yJi9P0nnQL8RgocbkiwvdHWWxDjlcEnmnsS3kAT_hxOK9FwDuy1mn6Uh2nZ1eNIWS3ae69SjImeBh_EjkPlcANn0NhlzWuiYFXvPd9yoRrDnXyYUDT9sA=w209-h317",
  },
  {
    name: "Double Grenade Pouch",
    url: "https://lh4.googleusercontent.com/qECjnfovRfwSRtvaZjmLzdLmisvcpuEkpjrHzulsgtmq1-bEIdUMaD5O5wFcPMFcxxnGPJTzftP7bYdEK9IfexZFOy3lI1r59kOGTKdx9JaQhCb_b2U_kHMBfsAnQhV4GzvlzBRFfA=w209-h317",
  },
  {
    name: "Down in Front!",
    url: "https://lh6.googleusercontent.com/2p4uq-A87IAFcVHv40ZVJuaHNH2nDNJ-IFdxhOF2Rb0uG-lryXFFjWUpWtriZv7MQAzcCGl2Z_eySI1cry3XMTiYD_j7JdeTPOS6TZ7jPpY0DhoAzr5PP2Fbz7Buzmr671c0H7zNUA=w209-h317",
  },
  {
    name: "Durable",
    url: "https://lh5.googleusercontent.com/uQvJSF46U98uJ9IhCvRZ4PuC5EQYyuiBWGQaCFrhWQXTbTNWIumZwFiBVCKos-u5nsxUm2OnrmJfeEQ6xBr1aPyPRaBkRpJP4GZCwV-rSqWgRoZo7AWvSlPTlXY9GSf8lOqdlBm2WA=w209-h317",
  },
  {
    name: "EMT Bag",
    url: "https://lh4.googleusercontent.com/Kd_dlwLb8KeRE_k6gLuGNBkCRrrs52b_xOiShobW9Gcybj_7-KyT7Q2tTHy8cktR3K6bzyuQQTdTUm2ht4E6honDbHcfVuruWzP3hTTokKRYPMDhxxJtXnblj88uBzt8MQc8bH-kzw=w209-h317",
  },
  {
    name: "Energy Bar",
    url: "https://lh3.googleusercontent.com/dPnrg0qJ75yIh_olMN9lXxjgqDZ8ryk4O0OYlQ_reL4a0SgxPdHfe0nKao3VXo96iE0j0U0PyeDWW9h4DygTv_e7RYzcsa7lW0ZPj6Q1q9sNjLSJv2cqNrJLRL5enP4S3Xwb-dHNfw=w209-h317",
  },
  {
    name: "Energy Drink",
    url: "https://lh3.googleusercontent.com/5hBxgVXUYwKXQxwMf4UI_QqDkqpqr1IDA6ASZZrz9_bt5U7a7xzLt-NVBiP-wsZ2jjfaxtwa06NaAhuGt-kwgwTgc9VRG7pr1xRoxOgN0ivy1GksSBDQ9ZOKg8K_qOBvYwn3UqNrWA=w209-h317",
  },
  {
    name: "Evasive Action",
    url: "https://lh4.googleusercontent.com/u-C-H4duG5gvs33gJEwz1nj8Of9L0nXau6YWwpwxEXgThHDNnigxCkksCAp5tYV0clTzsiEcYA5dCJpIsstQ4pRAGypTAQ6sayZwxtYow7dC_yqFbxz_ztVtQL5eM4bszreRdotK3A=w209-h317",
  },
  {
    name: "Experienced EMT",
    url: "https://lh4.googleusercontent.com/9uVQMORbZE_-KBS_moWZNYEi0ecx-gRPZ9nAFB9wcFBhNQOqUWYwi2-jtvzk2fJMgeLWdjA6KM2eyTSCY-uH4ECIArm7D7M16RozNbLwwDFfnUVmVFviXI6nyhSFJeBnMrhdpFMRBg=w209-h317",
  },
  {
    name: "Face Your Fears",
    url: "https://lh4.googleusercontent.com/RvqhU4KzIVG_Ac2oSt2LZaQ_8TqDTMFpisSK61MDwHtv7rkLMHcJUjHWsvOgKWqjZ0iKKlaM4lHpTfrIN8Yswihv8DphJFysLzAxVeLULwhZBBBhLIiuMNlHTsnBIs4cyKbqNfftPQ=w209-h317",
  },
  {
    name: "Fanny Pack",
    url: "https://lh4.googleusercontent.com/Rpmq-RFBS8RTyogvnv3D7gKibCvxD7tkQUaGyN8En5T1S-Vhju1QrsT5cbrRWPWQ4tO4U4MsEBzl46RkFWw9z1EEBqqilN9judLj8Rqq2cF8a9DvWJTSJrM1-oX760MiSGff2HCjVg=w209-h317",
  },
  {
    name: "Field Surgeon",
    url: "https://lh5.googleusercontent.com/26hTuC8dzkMPjP-HUZP1OxZqOcNhoq6Fe26-dkrjKZV1Z3lZZem37ci4Ye_-E8eb02wkOEFcPSxrkqGGhUtWnIc6oDW1d2ZgTfhiDZ1jWkomPLOeGHK8DId8C_u99x_dokyya6XRmQ=w209-h317",
  },
  {
    name: "Fire in the Hole!",
    url: "https://lh3.googleusercontent.com/S3XTobChwXyppQxKpvTmDs0AKpvXfcCUop6ZY2UYZwzE61QTyrY2m1CJrOO2sl-gSi9IA0fhhZhU8uYoCC2z_byOPrxuJ-ZZ2waGoNxQ1iXcuZ7PxlDpA02KiehoH4EIH9fjf3v0ig=w209-h317",
  },
  {
    name: "Fleet of Foot",
    url: "https://lh3.googleusercontent.com/HWn0hfik-1yVDhYaEqzyiCQOVK5AUpwT0GwyGGADji3D506LTdoklF3kW3cxC1xSiZu7ukU2bpdkBsLXstd6SQZkrWNTTtmkfKKh3nyVnWt0GD5wskaBwt0WJkpBCbXyubN3GPfg2w=w209-h317",
  },
  {
    name: "Fresh Bandage",
    url: "https://lh5.googleusercontent.com/HPHvI15oBYGA1pQHvyQXys8yNmUjt5ikcbZS40RmHfOpissmVExjqKsgk0cF2IvjV-CsKuukierFEgMf4XZ78DYwksUiltKbY0xQCVrgoCpQIBO3yVsapw5I5ManM9z1NH6oeZbgIw=w209-h317",
  },
  {
    name: "Front Sight Focus",
    url: "https://lh4.googleusercontent.com/1N0j8WnZ-m1Y92cUEjYg8DI1DpXZ4xt4645K9gZU-ddzcRCETwnCu_GZA7OUJ-xPhmohHhAPZiB_FBJA66Q-VQA3aNOcmFo6kMCV_a4YwGhXGMnY9BBiD3cWnZdBebgCuWLKimqdTg=w209-h317",
  },
  {
    name: "Glass Cannon",
    url: "https://lh4.googleusercontent.com/gUx2vbrPYQ2qKvRnOdVO5IGhlTZ6a2RWNIv0ObYE8r0QRIxSVjR8CvnV97MQOlUUXKMYqapcH9A0n0rYgglS5QcbV92EbTXKft65Q9gbQX-DUxi5WSB7fDvA2d7672JWpKhoQjoIQA=w209-h317",
  },
  {
    name: "Grenade Pouch",
    url: "https://lh6.googleusercontent.com/ORk6L8OQ3sTu-wyJJyxJlUWRrTlmsglLmkIyohVaLHotethvQUOR_SygnNObimvoXQOQBJTluWezBnGheWO_ciuH6AoPvOaso478TXVr6M61GxFPWQeRiBXfopatLssOhTCfucB5UA=w209-h317",
  },
  {
    name: "Grenade Training",
    url: "https://lh3.googleusercontent.com/kE8zrvODCa2a-N1X1Nypbsw8W0PJmmBv0eO6le7tOAkiy_Qd6Lj5ii1iTGuvHLpz51C299EumLJ5BYb7783p45onrVGhBA5mg7xWngq2_D-V5MAVuGV2jt-r4Ldoo68DIJY028eN6w=w209-h317",
  },
  {
    name: "Group Therapy",
    url: "https://lh3.googleusercontent.com/ac7DCQY-n6YzjJ-J0DfSeClarQoWiHsAEDRF8o9cIb0myh_E4Pf2hkBkzsEAPGyOKdcMO3BtrDnTV0ADpgVZ3JkpNZb5JlGZKs1EMFTTOKrEHvFVlbfeyjkjWLyhl5x2WpWyAaNOjQ=w209-h317",
  },
  {
    name: "Guns Out",
    url: "https://lh5.googleusercontent.com/2c4Bfkwpsln2ivh6dF0DssLWaJch99vGscQocLqIXfZ3YClN14I7udcjjawTki4IDYfMSrfFSHti8Z4RH2mCWqsIwzEcYuiXfOkyo_GP9EKKCmSntEeNZQjh9i8lGAgCiGAhHz6AIQ=w209-h317",
  },
  {
    name: "Hazard Pay",
    url: "https://lh3.googleusercontent.com/JzrKjkYs87wF1AlCwDWiIbqtye7wrUQU2GCXMGG9MMmH1dUNiZNE3mu0m51i6ovkigwPsy5JUwXBfCtnDsr-yyLfXaRamwJAflZbiNB9O8tpsArx105zZaeQXRIeshMBCtB1KsF1Mw=w209-h317",
  },
  {
    name: "Headband Magnifier",
    url: "https://lh6.googleusercontent.com/XfrK2_29H7jF1YGJWcNEEhSIVBMI9jCogdtp2d0sa5qvAkpJhYKlRtC_DK0uFqctNHW3-JTN-5rV018-Q13wx2qHghlYdjYthZrCW6DJmMkfEELSw8xMnchLZNO26K4upzo1762GGQ=w209-h317",
  },
  {
    name: "Heavy Attack",
    url: "https://lh6.googleusercontent.com/7D4CqyPSvXSGg8AjN60sSA4ZS1tdmppwI4i0ceALFLWlOI_2zyB9pAqUAUD-iqBsVjbo_CfvTm4buIM6tY_7POeP-YIyq9tnKW1q_2PD_hLaAt6t4akZesyCSGm-DcqieQdHNvcW0A=w209-h317",
  },
  {
    name: "Heavy Hitter",
    url: "https://lh3.googleusercontent.com/G9PoW1dexzy4PkwBUHuEAFq_9LjL3FYlM0oBN6mb7nxxKmNvbCjPsRxRUt-Jm2cYYZCjaBDLOUw-vuTu-pmeXgZ3O4wdpyHTqKdFr16n7hExdaBAr3ttXF3Kf1xz2-hO5nNWayiJHg=w209-h317",
  },
  {
    name: "Hellfire",
    url: "https://lh6.googleusercontent.com/cTQ9ZaCewROJnOPDqfZYSf2iO2iGfFRVTaaI-5OgwQ5buBItxapoVRf-CSxuGNfdvaLac9fE4-slRMjZyTXbVxtqVmmRyFLRGV-0UxQhd9j7IGNq7KQUIKcaA1i8hMxhe8FsaguSyQ=w209-h317",
  },
  {
    name: "Hi Vis Sights",
    url: "https://lh3.googleusercontent.com/2Cm0ILZsFlwlOoTSaFFl1t5FfOjeneWfAaBwt8s9r914bYwUQki7Cuh2RKmeQ9rAA_jzohH8jJeRBIRHfWYWmY7BidMiRx1p-amdvddn7REwHSc80JTk14ZZBtfQ0rBVjDGo9Uzd_A=w209-h317",
  },
  {
    name: "Highwayman",
    url: "https://lh3.googleusercontent.com/PZbozC1B6zClZdBCQb_7-E2jHyvMqcT1D8sAe3Lu-HYipmtxdu4_ttiSUb69Lj8wn5sZj2fP3y75lPWOLOkyMMX52Eh-KxSwgwuZZWnBtEBei_gZt0Df0_MS5z7Tpo7wIIWJlQ4mrQ=w209-h317",
  },
  {
    name: "Hunker Down",
    url: "https://lh6.googleusercontent.com/dLWF-oBcyHg8-ZJ60hoBkfs6lZl_k3BTl1KuFMhfns6aIFs2cQ5-RvHqlvQsvRXoS2ts5JE0jdsSjAQ0Jv4UGGbyzWIa_xpa6R38Nk6ka7XbKdv6lboYpajBbKfZswcm2rvv7Tg-Ng=w209-h317",
  },
  {
    name: "Hydration Pack",
    url: "https://lh6.googleusercontent.com/_yPxaJA-HVcgtpZhTtSoaIaxNei4D-N48aJZYmZUK1A_Tx7fe-2oNQqJTyzLtUnsNlf_WdhwYUk2M3RwJ9l5sMr5gHoXRMRYwaIBKcVgd4zsbklMlBQ__ptjK7xJGTXiOtw2oNJU2g=w209-h317",
  },
  {
    name: "Hyper-Focused",
    url: "https://lh3.googleusercontent.com/GxtXNym4-y3tZSaEX-5tCe661iMmjJjbV4TdhMRjkYTNNXa8I0RlVSkdXG2UNBvTXKXHPs9dJq1oet6qv2lIAQQBRZ32IEbCc79wXMSAJ1i3c2F148bF63XCJV_Cc5Xsjq0yPt1iAQ=w209-h317",
  },
  {
    name: "Ignore the Pain",
    url: "https://lh5.googleusercontent.com/zbIuKuxNHDreAQY29TetUpOd2jUeMfhQ7sOV86AzfXsZ3C_ZWgwEX3eeri8sHU9X-TFudEcreou5C_9UGLovmCF5RdadmYrpwTeSo6oIX84POfjIiOG3sm_wmmshLGOrG73HFs4nrw=w209-h317",
  },
  {
    name: "Improvised Explosives",
    url: "https://lh3.googleusercontent.com/-iBd5UPgmQD9v2-0OXO63SA_1Uv80ZX4A4CfPmwRKvy7U4Cd7jnHcFJhneF4jpcSnu2ijiMD9cGSXeh44QqlGnSFJIZqViupI23ZReqc_jrEbsXLP6xe2HxOw3Qf1iStcMZlvv2u4g=w209-h317",
  },
  {
    name: "In the Zone",
    url: "https://lh3.googleusercontent.com/HCdnU-pIbcVV598viJJmvCVyothYgGQM-0zoILVRNJgnEdUv7DW5_E94xhp7Jb_nXU-__88eQF6dUBzHKqkb-327Fhmkf-TF6hseuW4Ac4jX6XW_PDFSnv3yPiF8swv1O5j2yAzdew=w209-h317",
  },
  {
    name: "Inspiring Sacrifice",
    url: "https://lh5.googleusercontent.com/xH0QRRGYd--KP2XXhYg7S4VD1aYo66X_wqDjpgNBFQqg6HgFvEwJuWuhfkLTVGWKXS635x0wu4bEfWlr6IVLXZ3TGxzQz5oHRJokFwPWIaAsOudQTAF3cSRy2eqIUvP-lQkeiABuIg=w209-h317",
  },
  {
    name: "Killer's Instinct",
    url: "https://lh6.googleusercontent.com/d-ZGFXi3-ggt_TpNHLwfsdQ7peP5w2R6dwIZk6dNs1vaxf7RCjNYl6HZYHStiP8_87gg1LslGj4pPgXMCOx4iUJw3CEvxXJFMfHEkwDxjB_8-WWa-LtcBSRWBgl6qC6xTm9M13xepg=w209-h317",
  },
  {
    name: "Knowledge is Power",
    url: "https://lh4.googleusercontent.com/isZiehMRL3IGnN6MxVItxHdySZBAolM9Mw-jE0uJTtayQS2aHUATQ9GQHDd5MCNK4BJRueLTsAaW4BxIhrZTA5-Ed8pzyOOM944PqkW5d2Me0RpO0HBeipWUV_hFgC0Tomiz4k_FRg=w209-h317",
  },
  {
    name: "Large Caliber Rounds",
    url: "https://lh3.googleusercontent.com/r33AxEILN4a_x-wiImFZhJw7Cjw-Cxax6wV5htvhOiDUNiu3Sf5wIjPFF5DwZrlfwtqx4PCahRp9ZmmPWac3QgjcQCQg58p7qf0E9eaNTcMVprHSy4VZUdh0BIYNS4ncpcH8lBV2uA=w209-h317",
  },
  {
    name: "Life Insurance",
    url: "https://lh4.googleusercontent.com/zDbTswFp6qPJdQ3OjlvCVqk1XxzksLeKadtK-oQPxtbU5I6vg4mf3SfsQc6C_Z0f613MeofO5DyvMHk2ZhVc6r7cWjalImJQNt384jc1bqKZX6SR9AdJzQpZehgdxfyMRPKU8XbtbQ=w209-h317",
  },
  {
    name: "Line 'em Up",
    url: "https://lh5.googleusercontent.com/RWndypryvQUY8b0fwlnlPzfP-vqwPv6GGHIwr-w9s9Gr0Cjgib8MEoVACWj6mfOUxhlx9e3998RoMF39VSzA7wG1_IDnMcQIcgU5W_rg2taoAie-7pIO1DOBG_SK4cU7RHoYCeResw=w209-h317",
  },
  {
    name: "Lucky Pennies",
    url: "https://lh5.googleusercontent.com/cknWq5tQ86rzJOBGxLmTnaxVcNtZO4-pyxGyxwXZBUb8kC0mGdljna9OjH8Xp-pKKmjTOfqBxnBxEs7Etbunc3mohQdEjyCHexMuXIByEJB4h4rV_pF86mSxSRmL33iVEdzZabw8nA=w209-h317",
  },
  {
    name: "Mad Dash",
    url: "https://lh6.googleusercontent.com/2kWrv6OCvED7yca1h4w7NbqkWYBKquGd5eSwwdOU5lrbeLv2G16P96zXHqB-LtWxOhIWHMA6yTMFzyTbgTcB67qHBToxpXC2It5aKEvTDK5dEZUVz_Rb7v25u-L4zxtVKsynkVqlyQ=w209-h317",
  },
  {
    name: "Mag Carrier",
    url: "https://lh3.googleusercontent.com/3fDligANyNNh0C468jz5PKHtB0fFVD66AAwXUBkGj5zhm88B_nk2_PTPreRUqSYAWLLtBTPHwXm2hWnKhFqhnrN6kHPtCXaFLcM5neq9vG0B0TU_QLkH8VSDDIWuYuFprb6q2CRLLA=w209-h317",
  },
  {
    name: "Mag Coupler",
    url: "https://lh4.googleusercontent.com/NwuVdpKB_FXfQTH-_TVIZTc1k08ZqhSXNMRLkUtoCqht1ldqRk1UvRIngsW9SePZ961D3-wFNSXKFw3xp6yTmExKH0hSk2Hs-2UkCuyR1oQK4CuzyEmSuJDvaTjMXulI7JyObzDQbQ=w209-h317",
  },
  {
    name: "Mandatory PT",
    url: "https://lh6.googleusercontent.com/k0c0jkHQ3Fe_2ObN9ZoMoQmbtlHdBMpH2eIbH9Uq3f_XnyIgfn6awEzbve9iaDJcH0Wtslo66fCuhmBUXRtUbeiVSnxScyXOoxJbhE0c7e5IzypBqPKNUehIe0hVqQrqhO35rDwCtA=w209-h317",
  },
  {
    name: "Marathon Runner",
    url: "https://lh3.googleusercontent.com/i-1sXBfSo64yMvs2EsfVHwDUUOYqLd_Go6DNMlQGU_aFVWgIojNOcU95i5dKbWqiCyt-FfaQIYoqbTIIOMJO8hOjVsFeryX2zMjjFfYDuCVhIYY_wWbZnAuoSWttRUB5_8d15340Mw=w209-h317",
  },
  {
    name: "Marked for Death",
    url: "https://lh3.googleusercontent.com/g_Eze8HA1IbmyF2EmEJRTgBxPycaSq_60DGL-II6ltsxujRBunOglOELadhtiNULW3vb_VAopWdunPb8UOdp9hAcBbYy4OMzzENU-BS9t5Hj-TFz1fgTI6oL_NO6lV4Jtdem6MPkeQ=w209-h317",
  },
  {
    name: "Mean Drunk",
    url: "https://lh3.googleusercontent.com/IdQUqBpdm2BxpTQPaJAYfpE--HXY-rThhzR-l_AtUOoCXLjMocAlyn9SVH8Hhi3WQTequRDI0ZON6InmczLPTT7-sOnUf7Euz3kixDV78LNqYC0ydcv1WtyxD25318bCplam0fJrSg=w209-h317",
  },
  {
    name: "Meat Grinder",
    url: "https://lh5.googleusercontent.com/rioWExKsac50TTgJevltZcZ198l3w4LA0ZxZAJWf1fMAOO7O5KpsRSGHXgOj3DXHgrJ9P1O5NTWSzvKvIlKWU_zRrCeU9MJhM78-eB-EKoJUdnvrXZXoTugQq2Rq-8bNunjG8rffwg=w209-h317",
  },
  {
    name: "Medical Expert",
    url: "https://lh3.googleusercontent.com/zmFme5i7axQFFJIxrAS49fFdzaUdJnSSE4669j0SQfqCYp6xcDOi1iawWG06nby7UubEKOvfNWGvuwaVwnrYMSuOgNhjqb0qgcSFZO15ToHt03gNjnDe94cqua2o1uOs3OS0AOlBVA=w209-h317",
  },
  {
    name: "Medical Professional",
    url: "https://lh3.googleusercontent.com/gC15L4CPS_saBi7T540dLaQHQ2QofsaDONoehGI0wHX90tti3mm83qlofgaoaZA5cv27uNJv9A9vtaqaqE21w8t-PZNm2gPeJMtk-hlbOk3jU9aCV8Z8ZL8Pxc6q9NA5hmO5B61k-g=w209-h317",
  },
  {
    name: "Meth Head",
    url: "https://lh6.googleusercontent.com/TrFXDLdhvi5eVU8L1Qx9E-m15wnxFWHUndu_ltMRhAGLUYvx1DFA7kfmbNaflOUM_m5DEfhI6sCCXppR1UaRfAfGUg3yPWTfvpu3HUW8kx0BUJ3QnLSl1lYSpiGKrU0bSDQ0X0BEgg=w209-h317",
  },
  {
    name: "Miraculous Recovery",
    url: "https://lh5.googleusercontent.com/JJuEP0oOJBvKx1S-3WEPiHdvl2A3CsWBgrJLodFznHSWDefGbw3U6L_8h_lqh92Dvf-XMYl81mOgTHQHAhGxBxcVlDftoJq1pEt_rASsypkkhZo3F6JP-TeQbNEfP6G47H1yl0lREA=w209-h317",
  },
  {
    name: "Money Grubbers",
    url: "https://lh3.googleusercontent.com/WcllbRLpB_4-QmXUqdoHLHmNad96I8rifEn3VCybix7jhmjN_1yG-y4yKDHkakOJ9rQUOKSDmnidPHriwpWhD3RVVcOFd9EvhGkPyJIpjE7AD7gBw9vhSzG6EflaCDhpmH-wRwUM7g=w209-h317",
  },
  {
    name: "Motorcycle Helmet",
    url: "https://lh3.googleusercontent.com/-Dxn_8YEKTaHs3es4xlRwgonUCvsJRaYDnTYqd-hgRrYxkmFHc8_ED79_SrCitfnxSp-oUX9kBlynzVcCpQfnNH_s80mE-x_PEZu-4uc0b_2eEnkRDDKfnBzbUPd8sKW9w0hqoXizA=w209-h317",
  },
  {
    name: "Motorcycle Jacket",
    url: "https://lh5.googleusercontent.com/5Wk_MPQQ9fsNiqXfqigpnxnRtnHmIlsXUTJy4TqreB9esIiL3pndENVazagPCyV5n5cyk-NNCzFJGg8432800eJ5PMQsBxCjHtt-cH8B114fRFLFDNwn-iHwPey_gUJVhHoexZbcsQ=w209-h317",
  },
  {
    name: "Mugger",
    url: "https://lh4.googleusercontent.com/crh4pARrYlLUlakDW99tGDNm4zqvcXdNOaGLPBjE4n1fLey3YgwuBI3Z4rnUs8xiTOqCiK4_jqHm0uJD-LCmrUt585NINexcqk-0ouI0fVYAVVl8gsEl8hdF1PgLU3x09X7wi4yPqg=w209-h317",
  },
  {
    name: "Multitool",
    url: "https://lh5.googleusercontent.com/o9F-Tgbd6uEUzfX5qfrJ_Bx1-7mjn4pwvCyY2HTtxra8AUj_f9npRksdRnppt1ehoHLM51IugPDIlquZmTJM90Ugfc50Ctstf_gQ96MCjwyVxGhIV5ODFsMrWFvhVbe4aLeZI8tFnA=w209-h317",
  },
  {
    name: "Natural Sprinter",
    url: "https://lh4.googleusercontent.com/m4Jmj0EcpS7wkMqGZwX3AxGQcf5sapHAyszLb9iKSB7YSMmXOnqFLuRA1xgs282lr59p67yxGwyjlpfgo2oDbNovT63bDvyWNO0GK_R0ZcrRsKgniuayc7HdG7FxBoLtZtSz0Avv2g=w209-h317",
  },
  {
    name: "Needs of the Many",
    url: "https://lh3.googleusercontent.com/dS-k1iIi2NGunUqWXalKv41hXFTudKDDZkAxP43Wboi0Qearccz2F1nJJGVnpiMfrCyXvimmUC6bgn0UDOdyi3YZ_Hj7uVTPKzSJVLmMTpNGyXhwRaUdxbBpPEZVkPsAMVFo2dQ7nw=w209-h317",
  },
  {
    name: "Numb",
    url: "https://lh6.googleusercontent.com/_efMts4BNXQl9xXy7FjLf1iyHDGuyX6YaX6_i0PmHTCmmpdEMw5yKiJF7pG55Yra6Hv26KGbAOcgJ_l49YRF1gpKjFuWJSv2tW4E5AQmc8eLsTEmIG-sfBVxmt4ZO7MT-wL3z3dUkA=w209-h317",
  },
  {
    name: "Offensive Scavenger",
    url: "https://lh5.googleusercontent.com/hNbRgf-F4611R4jKOc3kxfPVpZl4GMY8IbyM21mv_y4zjP53gobTv3Jvh5jdkVfUuw_D4tpVwS-_hWUN4m9vGJMFyxk-rByuJYPvx7e2d9lxGitJaZYwd0pwIemMLDsQZo7f78pgdw=w209-h317",
  },
  {
    name: "Olympic Sprinter",
    url: "https://lh4.googleusercontent.com/z2WfEK7tkb01usF84nD31RpwuFbsSzI01V3RqrWFphZIUunCv8ON_7gDS1_sC--ClJ65jxpwz4NSEMSKe-tbl4if8otVkeAVSeEQA130JhIo6hv53L3HWC39YcEJtR_RjmKoeJXiDA=w209-h317",
  },
  {
    name: "On your Mark...",
    url: "https://lh5.googleusercontent.com/_XFZ6_ovmobzipBeTCjc9m1V30Hkqe9WReqBKUYoesxDbNtejqYDWTokCpzItCwDFYqD-ynKq9ucK9bbyPRjGqcw61GogwYB1B4znCr35aE6GSJAISFjIghwSr-_u7awl7Jz9VyZPg=w209-h317",
  },
  {
    name: "Optics Enthusiast",
    url: "https://lh5.googleusercontent.com/lvD-ZMS6wwLnjzp8scwCK4Hm3G2rGVlSmxIThnWyzRrrcn8neXNJaoMfmGEtl6qQwE1j3BnCsO6GtxpnZ92t96gWgVqkaW81dMHu8zweqRdD_ORIbxEgZLZpw8QzLxNQ0wNra1toBQ=w209-h317",
  },
  {
    name: "Overwatch",
    url: "https://lh3.googleusercontent.com/tt-24ghdgfHuGJSy4q__w_GEaTiRwwYlkjeujf61OQ6AIVx5cAnKZHUCjV8sMN__TuxhoSuQdPKoEQNTQJw2AexM6S_9bRLj3GVC-3l7Fk-6aPg5MZvRldF-o-uLnOxcfQQCGfBV1A=w209-h317",
  },
  {
    name: "Padded Suit",
    url: "https://lh5.googleusercontent.com/WHrKLrSeRj3T2uCWMTs8XPmiIi08HuKDio2VZ-eKF8QJqZzYp5qzN55cqmoztD54OS0enZaM88al7nzcXId_Vu2LNw7-Ea9xbT6JfbJAU9QDnRpbKd9e-rj9nQBKfTQh6fNsYcLbuQ=w209-h317",
  },
  {
    name: "Patient Hunter",
    url: "https://lh3.googleusercontent.com/4W10QGEKYvYBuDWV655OdxTXdsTVTNjSXXSu9GcyEYKebKUOktPVA8HK_AOn0Po6ItqFHTwdAl10pCpkFYIOe2MtiIWL4rDjrQv_YedT_8_P5P_tKixc5VYrcRhWMirclM69PL8BNA=w209-h317",
  },
  {
    name: "Pep in your Step",
    url: "https://lh3.googleusercontent.com/uGd5VNiar6vUDf_onxuZm58TRKIU_gzMCoo53ecOEHL9kJTrf44EYYMUcxucikRlDZ1y3EJ_2hlhXT7IoylwDSTPHux0b7mX2jA5n4JJocCmErRW72FbzVO8tgNP0E_xA3XyDzHsHA=w209-h317",
  },
  {
    name: "Pep Talk",
    url: "https://lh6.googleusercontent.com/l1flEXuLsIGOBK_gRMvnqQT7sgky4xJSGMycAFwEe-dHhhKP1oh4yXxUaY0sW4JF34hfUNveXohO7TenIWBsVLec8yjhNpViIf8N9cX-nVwBxBNZCNNkF8-DDaboEApw9tR1qPfYZw=w209-h317",
  },
  {
    name: "Poultice",
    url: "https://lh6.googleusercontent.com/HJhRp4cOkKaKOEENvvV8A6YeO8cpU1pUK-nsBwEWIEGee6EdNuq3Ub-NSxcFRL8NaCdayx28uv6Nw97gTqwmRCns47g4nJcj1cSA5K03XwTykNgQLmkszI6b1kJi7UfsDB3AOZmvvg=w209-h317",
  },
  {
    name: "Power Reload",
    url: "https://lh6.googleusercontent.com/7kFof2s_AyaLQsLQvjB1Unl07ekwq5iqbFI7Pjp-xkF7jRIcUwxTi4-vLvwQKAbdSUNWHMyZ19AzOYBGc7e53ZXJiPaKWSOgEG-2XwWMkh2v-MUw1cRifiuyQcnfUmJcWu_q7me1zA=w209-h317",
  },
  {
    name: "Power Swap",
    url: "https://lh4.googleusercontent.com/oWTFggXIG0Vi3Q1LmjKga5UmCK5wdXgEcOa0GFWGYv4NQlGJHEN7iVVL1M9Uk5iHdUOEFvdXwQJllVj3Obh-QidaMqEWwc1rJQIcOC2ABgwd278stzmM9yEtX6FUjkZMuAcSwOS5BA=w209-h317",
  },
  {
    name: "Quick Kill",
    url: "https://lh5.googleusercontent.com/0WtpuCGoDsQjc71G9gLxnKsDYQXrNkGiLehywkkR0ROXAfvGOluzFTX1YwYip2_y0IsR2kbgIyTOQ7HaZkv2i2-bmbzvWhevMDloxaXBJledbqU7R_IKrcvRGz4ccwbcitMYORs7-Q=w209-h317",
  },
  {
    name: "Reckless",
    url: "https://lh6.googleusercontent.com/vOXyZmThXl8SMMY-EHWD4cfQCr3xaAb-hBKPM_YNU6nXI4RE3TiXYSlirr-sSLNHLR_qo06Mr9nZ1buvMu3aN2A1EUoxMX_OkCBAqf-P9gnf58Q5Eux9ZVKEtxvPj24RIRSfdcaPRQ=w209-h317",
  },
  {
    name: "Reckless Strategy",
    url: "https://lh6.googleusercontent.com/pWKPkZggOYU1r1BRZb7Fc_OaOF6IhywJoaR3nClihcWb0uESFkFKIOlZ7NQncHY6y__uqxPgePfIWmmY06tpPpcjQiryfTkmRrYK-C29y5ml_z3Z8aiwZn_pjVksMHnw32bzjgS6DQ=w209-h317",
  },
  {
    name: "Reload Drills",
    url: "https://lh6.googleusercontent.com/06HYb5fKRx7A1s6-r1Yny4pChCsI9DGdI3tf8FcQJEflpJ88YPxPwmS_M0nKRo_OttPp_lsAywtGvfUQYuH9hM4Ulc_RWcPccSkIYX4RT1CcZ-Blal_dhxjtWY21tNMKPfVKX84zWg=w209-h317",
  },
  {
    name: "Rhythmic Breathing",
    url: "https://lh4.googleusercontent.com/QRcxyqv0FRtrn-IFm7L_E-Esat-8eyUuLQoteu7mpdPwNv4WAQP6WT9N3ZrlH1FZoNf0e2KP3td6sb5x1gbzMDlVp4i9LxUVfAy3ogXDclyQhI6Fwy6_zL2YTdaqXTTrbVN4sj-cdg=w209-h317",
  },
  {
    name: "Ridden Slayer",
    url: "https://lh4.googleusercontent.com/JIAogYDebLCUB6YckXf5h8ow32oKcXWOVgkCfAHCoPAU7mrJioYBQHgwd2oFSzOFqvh-MsBwnRG3qmCFNf8ADSojcNq2MI4CGxwoXBSBa0hM0CHkkBHGo3oLQI4t3ScutHN43bte9w=w209-h317",
  },
  {
    name: "Rolling Thunder",
    url: "https://lh6.googleusercontent.com/zd0_BlK1M8_J7O90Wd5aofvjKujtahnjvyCZQpA5sATGS3wQ7DX4Jb-ngVgTh1dqnVoIazQ0BlT70zlQi-LE-gyTM9-_xNQUO5L-A8qkuQxu40CJFl7bcCc11tiiZn2HxxN4eZxHiw=w209-h317",
  },
  {
    name: "Rousing Speech",
    url: "https://lh3.googleusercontent.com/dqgOVXDBtmeo37ts9j9UCWqyOsuuESTR2Y6hXFS_nguoviHKxP75R7GFmWvzUAU5rf03n0AgHxDERTiO5JUSaDIRcuENJ2qERvPvyBoX_Qbu8f1ZvXLAzBwhMv2y2djpVPrpvk4JVA=w209-h317",
  },
  {
    name: "Run and Gun",
    url: "https://lh4.googleusercontent.com/O38T8xL_Qg1v9ALG6HUoZVv1GUFDNjw63p6-NpFCYjtenqWCw7zEzRE_3vqxnHnLPYByemVhqLNhMZZhRDJRn6tyj-_Bxb7CkPRkQgtiJ0IogNhTBRBty479pzBTJmfql1Wy7_wR7g=w209-h317",
  },
  {
    name: "Run like Hell",
    url: "https://lh3.googleusercontent.com/b8weVcR5Wj0Wj2fi-NN50KZYvbZhl0BXP6Q26eDkd2Vswv86ckKympzwEeSCBeyxovjAn4t21bwBRQihw56vqHIoDXg2Ya-Ht4FbzXuGAkWkijXIayF2hk8FzhDts6RFo9AFNPuS2A=w209-h317",
  },
  {
    name: "Sadistic",
    url: "https://lh3.googleusercontent.com/XJ3Z1x-z8GmiVODbFhfuKVmQhw0ax-RxWP2oZ88Mv1-cEoX6EYsAFR2K_4WCwuNyigAZ8wfamGmvLK8EtugL41mJgK39rwaBELXRh6plpOo6iQd782QlZJwiAFZICH1eY1jwO7q11w=w209-h317",
  },
  {
    name: "Saferoom Recovery",
    url: "https://lh5.googleusercontent.com/8uRJzuJ2HP4EzEiv0Ir3vg3iHbF2XT2ey4r4gM5UoRZEpEKnfSSD5uuDm2rH1C0LytWURbwEXxil6UyNL4GqWIHOwYZU4N46US5baq4jKOaunj5i_RFUJN34oasZN9pDrQel575oIw=w209-h317",
  },
  {
    name: "Scar Tissue",
    url: "https://lh3.googleusercontent.com/p7qTv0CStwwvAAy3m5mW003AEAwBDz9PUtMVuFjFPkq5U426DnjzjckDeRLMeC-yZ7kgJ1NmQossaEQEH8kaMef-rhVjaHkqMjq1wA-rz-hHGpO-q5P4le9MV5l1ELk3C9nPurDCtA=w209-h317",
  },
  {
    name: "Scattergun Skills",
    url: "https://lh6.googleusercontent.com/XY3f2pNYqx_zdm6hH6vZqA7V2tTPIijdc2wpslf6g15iVG_r4JYQnBC0P2i0aSsV7sRKI3GVnJeiF0zyJEXsUDW2JzI2P9B79lmW9RVroBEqWJ2c7vJnteYXP2P7GiMz7jFzoWGiHg=w209-h317",
  },
  {
    name: "Screwdriver",
    url: "https://lh4.googleusercontent.com/8BJZncAYnZqHuCJ_Iszj6H11qJhIXxtduVr1c0CQlVECWL-4dWHe62oGojsHE_prcph5a9Zw-WmEF84aMS65tscryfInEexkZKAL_Kg1YO0GdGOAg_9-x2pWETpV-9Aodo99p19QQA=w209-h317",
  },
  {
    name: "Second Chance",
    url: "https://lh4.googleusercontent.com/JMeeogaAc_4z6CnVJeqW6DiTa0vtDG4Z4tVEUAMzkYiwBJs77h_N2NmVQxIcHtHxexQ_IBaqnlyLPmZBJURXuGoDsFfFpl8y1pvPYpeeh6AxWHN6UikZzJTcCtD5X-S9rAm_t8r7JQ=w209-h317",
  },
  {
    name: "Share the Wealth",
    url: "https://lh4.googleusercontent.com/zz-Cgo-vMr-EM9SAFqicBDkKzA7zR56ej59IJVqZ61uxO_cF1Z9UFJxUBSUDl9SL9feBwJUXEG6qW7rAaX3GxtFVs5S4f-PnEQ7Ak7z2vljOW0awrO_q0_l8ymmiD_g-7na-96Rymg=w209-h317",
  },
  {
    name: "Shell Carrier",
    url: "https://lh6.googleusercontent.com/CrN5iKdaJx80Bmi5sPQWh39j6tz7yOej_oios1ZGe2tvLdqDkANooNybYWm24_vIjEsE6YFC3T4Cja8EoOH-SPDbMD8qt1jQ0NnvN7y7kq3sHK-jJSaeCVDpCpfU0GU7Z-xcxYytyQ=w209-h317",
  },
  {
    name: "Shooting Gloves",
    url: "https://lh4.googleusercontent.com/i1i3WcvaKyJu6YOpEDBXI10QQeMBveyjzO2EwjkgQhB4Y7eIiCWRMyteS6OM2bZKF_hMMt9uboOyLePTatM9OKfCpyfO1dZ-bJCePhidn2ujLl4hZ_TSFl0tgmiT8EqG7BvUFJSPZw=w209-h317",
  },
  {
    name: "Shoulder Bag",
    url: "https://lh4.googleusercontent.com/7Jd4QnfmI2nxkhwlulZHkQF8-DLKO8PncLoe2Dqfg9FKZlvNbEi-1YHZJEkmLn0VeqdghhI_8ksk_QkpiGt_3YR0UkRBgWLCpP3bEZtQih4y12Rbyo3XTU_lb3UJ4dBSaPjJxspZ8g=w209-h317",
  },
  {
    name: "Shredder",
    url: "https://lh6.googleusercontent.com/Vh9i10QpMFShSlzXRo_1RKD-slgXFLPZ3C4vCCWS5-1n-ALS5sXx83dV-zb4jNESS95s_SPEB2J0rhTbx2Rq0tgCuUEse8RBXblaIrL38as86EE8-6_Js0itXdS7DS9uvMZv3K6jIg=w209-h317",
  },
  {
    name: "Silver Bullets",
    url: "https://lh3.googleusercontent.com/NIswwqhZsMyJv-CubIWbuhS0m6_SnTKnMFxUogU5i_6w0-kQfH0KAjaPB4Lxz1MrTXCj2D7GzBqF1whYUpUJRFVOJXrSMKakU1XMOWY3Y9OhOBv5X3Up9kdnqIQhYyn25dcnuepwAQ=w209-h317",
  },
  {
    name: "Slugger",
    url: "https://lh4.googleusercontent.com/XBxDml1opk7tkX0LXjfrj_pZ29_CdhbNkM4D003bYiie9sJBH4fMo7OlxCRWRq-WOeuDPGDScxjWpDQiiam4wIzcLQiKlsSAMy5iq8TTgQ3skQ0OSqq2BxPPOINXFYRLUmyfcgIX6w=w209-h317",
  },
  {
    name: "Smelling Salts",
    url: "https://lh3.googleusercontent.com/KgdFDiNC_csRmU18RqwgWXABPHvr0u4upGF-Ls-kFsj3v82W-ZNimiVdGFBSSJ67SRaqH4C2KuULV71J5mPqU6WD1-ZytAI5P42-pY_EOiy2HPNFPe3cI9GB4PjKIZE3Yu2PbR4xkw=w209-h317",
  },
  {
    name: "Speed Demon",
    url: "https://lh3.googleusercontent.com/60E5lgQTygrRqGACPeIR_oNp7-W53cr70Bajac_SvxbHXXYYsr0blLrQaQgGTQtzP-pqErms3mfljMm1iLT2RZHtQeM7qNwzJz2ViNyCyo7uSZq3E84ZyMT9uELcFhgGCMIGysPqmg=w209-h317",
  },
  {
    name: "Spiky Bits",
    url: "https://lh6.googleusercontent.com/25atB1bUmvhi5prJ6CcejCST3SF5C7VRw5hlewyfPTcG4G3ouOPEwN4Ap0scyFH-WK6rcTzKVTC4GYWX0Kjw--2zHwyw8WERUA63fzmTg5b0JRmL_rIloZBMnxXZt_mM2S5ZMr6bTw=w209-h317",
  },
  {
    name: "Steady Aim",
    url: "https://lh4.googleusercontent.com/QDQY81MbQC9uzAKdYRviHCA8eHzp_hH-J0Cdb7OTMYxPKPcIFL8yvrkEmgNpAdQlLgmBg3OW-aOvbpTcSWt_0kyrE6iQgOhTVDk-36gCeaje6MfU4db0iTCsO58MIKZKfBbHu54b_g=w209-h317",
  },
  {
    name: "Stimulants",
    url: "https://lh4.googleusercontent.com/D9OAVDyuMeQstUVH-4oXzcqe6kGwK_5BuBanaiyA2TqO-CRAQdjUfNvUSOW_jSsHFYrvu7ieTlYaIpyWufFsSF-xOvxJ4JbZOOYSXuXKbWbbFiRZRj7CpXqqSH4UfaS32n6HiKZXsA=w209-h317",
  },
  {
    name: "Stock Pouch",
    url: "https://lh5.googleusercontent.com/HzS82vPMgAOuEYYcBRuIgzswNeU-DpKX9-GJzd367QIqfk75m3mdOmdvRCPytpl3o6Gd4CJQuy8j4wfd8kOxifOxxhOY9aEmG6iDq2ObGSQ-9EaTMrsMNqAIX5ho0udVRtDPK3FRUQ=w209-h317",
  },
  {
    name: "Sunder",
    url: "https://lh4.googleusercontent.com/xqO5VYj-FdjkHqaC7k1wcTHzAu8W5uOtKFYEOWICYelO-9ewfup6gkAGd7u1lxOQJqHjWYkJGBxD6vp7S32DUtQnb8cScl-q9LTTkIkP5WvytFhc9GjwqzefhY8KGY338cUjK60YxQ=w209-h317",
  },
  {
    name: "Superior Cardio",
    url: "https://lh3.googleusercontent.com/sb8tmQIbuPs0eUGrD3Ie8VIa10eEQ-obb66-vV5yvgRNxgRDnRD0h3JmgHUjSLR7mEAPYflphhhu7_-UHXa7dmDoszsYLOEf8tsFcPaYou_4L9XS38GSlwlUO-iS7uJtCPl3U0yhOQ=w209-h317",
  },
  {
    name: "Support Scavenger",
    url: "https://lh6.googleusercontent.com/P7063m_iwjFkjA_GI5G4PspKNKzE0i-33JZ7hRxyr1KRB-a2HidLoN8En4DyPbVCvE5iYS2IqpuDDk7o2C6QfMDlj9SmTIvTGGgIuFL1b-FB4zLUgWCT2BKSANRbzEMjGhhOxiHO5g=w209-h317",
  },
  {
    name: "Surplus Pouches",
    url: "https://lh3.googleusercontent.com/X1sZGWcHC9axkpMXEHSNdYdAWC0Yfo42swT8RwQjRYT9OQMFGyiLDfx_PtDqcWP1zu_NtiaJaHL4Th-Sg1-Xo1YJEZUinmLQP3tCHagZk8fn7dta9XedFmq62LfzW9F4dGHmYDBcwQ=w209-h317",
  },
  {
    name: "Tactical Vest",
    url: "https://lh3.googleusercontent.com/LNWeVltES01rCETSWZm1mi2wnknMgKHMx5ZTaJUEZsg71tNfSF1doVkLowiqzxtq1T8w4V8FK3Gm0GCHLmHPgMsLpyPCmhk14f57YMoo9ktaReDzdvepywC0FazFD49aTV8c1f-3BA=w209-h317",
  },
  {
    name: "Trigger Control",
    url: "https://lh5.googleusercontent.com/6GeVnxJfKCmpDi7d-H5wnYtRoI9Vhsj9viPJqVVc9Ze-htPTkA1bL1XLPrXNEsvXFQm9RnfpGa5-7J1usmQIvSwk3SC48J50nwqbczkzSmXB3zHJ-VvmJGidv5Oi7Pnfp1ucXp2mtA=w209-h317",
  },
  {
    name: "True Grit",
    url: "https://lh5.googleusercontent.com/KlXpCM1BjX47N-iaT5mC4YxwRdXy2md48zAh7831e8W7n_PPTuZqxkpLZuuewvnj5KSNMiIAsXbWrEGdN1V05yrfyLvyVcfPqrncmGn3U9s6iga0C3bis1Hd6diXTpH-N91dBSB2YA=w209-h317",
  },
  {
    name: "Tunnel Vision",
    url: "https://lh4.googleusercontent.com/Rx3ApBV4Uh0iEfiO-SLgcdj99ciBf90lLBb3bhRtjwVhLfDPYrbwawFnWO0zlIgdRp3ZApi5rT-9YBKDgnap9BGrVL4CdgwOBvBD1AWXfhfnB1msbr2ThpdeKBpf2t7_4BdCSd-XUg=w209-h317",
  },
  {
    name: "Two is One and One is None",
    url: "https://lh6.googleusercontent.com/WgCVA6betoKRAKbV1BMyxql7gZazfZyMdzebLrDTBUgj5GiKlo3A1IFv8j12_xprC_-dHd3nox0TOMeUK8mZ2vlrP5Z51lgfQaxsC2bt_rpo26vUV3UgFIGa2Yyg39HTkbmF_azdgA=w209-h317",
  },
  {
    name: "Utility Scavenger",
    url: "https://lh6.googleusercontent.com/TrodpXbvcS5miLNSCVgH099Ll7_z7bBwrlCqcZm1m553Mri48bsd36zba3bh-gIjZwHSjjmimzft0yG2WE2BdyZQfSTFS909VgMERlpX7-kbmF8XN9IIGm4UG691ckwfqQwUGOBIiA=w209-h317",
  },
  {
    name: "Vanguard",
    url: "https://lh5.googleusercontent.com/0AesmzLmV-alHm1IGKOL-dQZizYeOaqqkh2atuLs5LRtpVmMuu7vvNz_5vuuK5KNgzj73m61Hj_wbdXjLOoYDbCzzedGHBLOdo99HfqDYceEfrWpwacnFnc35ElfCgtUu8YI7D3AfQ=w209-h317",
  },
  {
    name: "Vitamins",
    url: "https://lh5.googleusercontent.com/M8tcN5-nwbAntKAmDC_Xgd3QEJ-mwZRd9vQWz3HhNbW1rQoldjzMXLvfK6DlmfHf76ozzki3pq4eMIJGugY7Mz1MUeyrWwrnfeWv2aUV_xtBJIidpKvEqZ8GKG8EVKyRVgZ4cdNh3A=w209-h317",
  },
  {
    name: "Weapon Scavenger",
    url: "https://lh5.googleusercontent.com/wqHRylv2o2K0z3Prp3mqEaAvzdrNwCP4CPpMyM4DsqqaP-44pG5L3dIKw_etwg7Rjffo03mA1VWwO0fd1ysBhPipjlabC3TKztSbcIw2B2YtVM03DG-Dvz5KBYtkss31Y30WGppz0Q=w209-h317",
  },
  {
    name: "Well Fed",
    url: "https://lh4.googleusercontent.com/Z9buK1QwZODzWxPBIL2ICCWLdrdh5tLfEcnPEDvFf5ZlUM-GonvNHLpo9tQjUiylvf7315oXY3IZ0AkCvIGkLLOw3N-cyashWLDO5uiUMEn7Zaz-NqA1ZXojbrkpAviwShIXMfwdsg=w209-h317",
  },
  {
    name: "Widemouth Magwell",
    url: "https://lh6.googleusercontent.com/i-IWHjph78u8ZLVbVaIp4ia4Q02tecnoL52DeXBpoDa8zgWamLA0-PnvaG5gE5YRoplzRVE2JqX1DT7vlIll32x_1hVjVkPQekP-ki4ZZDBg-D1WKESXtEIuvZCslnAsM1QruLJa5A=w209-h317",
  },
  {
    name: "Wooden Armor",
    url: "https://lh6.googleusercontent.com/12ib2NiEVdeZISbD45eT-DeafbT0jzDhYVjp4eIYnQsfAjBAEZtgVD2pbguutMDAJper7gEr1babT5waDl9OwzI8sKVcmlt4d_Bx-5TJ3lOEJ6Hbg1npWY1wvaIqtuw0cjnBd-CjTQ=w209-h317",
  },
  {
    name: "Wounded Animal",
    url: "https://lh6.googleusercontent.com/SH119qij_HUZ_he2JOfprUFnEr9yKqxiMUH1LbyNA1CeCrs6WxpcnP7rL0V3gZeTIx8GWpPjsgSueMBIlUugH8rsL0ylXZ79V2_JgkKlRBF-8VL_AVIftkWmDcnkg6e6-kjadGtb3Q=w209-h317",
  },
];

async function downloadImage(imageSrc, name) {
  try {
    const image = await fetch(imageSrc);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = name.toLowerCase().replace(" ", "-");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.log(error);
  }
}

function createGroups(arr, numGroups) {
  const perGroup = Math.ceil(arr.length / numGroups);
  return new Array(numGroups)
    .fill("")
    .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
}

const downloadAll = async (segment) => {
  const urlGroups = createGroups(urls, 16);

  await Promise.all(
    urlGroups[segment].map(async ({ name, url }) => {
      await downloadImage(url, name);
    })
  );
};

// convert images from png to jpg
// for i in *.png; do sips -s format jpeg $i --out ~/Downloads/converted/$i.jpg;done
