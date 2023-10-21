import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zjwh.android_wh_physicalfitness',
  name: '运动世界校园',
  groups: [
    {
      key: 1,
      name: '优量汇广告',
      activityIds: 'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
      rules: [
        {
          matches:
            'ImageView - RelativeLayout >(3-n) [id="com.zjwh.android_wh_physicalfitness:id/iv_close"][clickable=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12673231',
            'https://gkd-kit.gitee.io/import/12673523',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '百青藤广告',
      activityIds:
        'com.zjwh.android_wh_physicalfitness.activity.SplashActivity',
      rules: [
        {
          matches:
            '@[text="跳过"][clickable=true] +(3) RelativeLayout >(2) [text="点击跳转至第三方页面"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12673349'],
        },
      ],
    },
    {
      key: 3,
      name: '快手广告',
      activityIds:
        'com.zjwh.android_wh_physicalfitness.activity.SplashActivity',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_splash_root_container"] >n ViewGroup > [text="跳过"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12673495'],
        },
        {
          key: 1,
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_tk_view"] >n ViewGroup > @ViewGroup[clickable=true] > ImageView',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/12826112',
            'https://gkd-kit.songe.li/import/12826124',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '第三方SDK广告', // 不知道是什么SDK
      activityIds: 'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
      rules: [
        {
          matches:
            '[id="com.zjwh.android_wh_physicalfitness:id/ad_flag_source_layout"] + [id="com.zjwh.android_wh_physicalfitness:id/iv_close"][clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12673476'],
        },
      ],
    },
  ],
});