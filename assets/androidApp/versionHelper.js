/**
 * 用来记录版本发布
 * @type {*[]}
 */
const ver = [
    {ver: "beta0.1", apkName: "estoon-beta0.1.apk", versionCode: "1", mark: ["发布第一个版本"], time: "2019-06-03 15:20"},
    {
        ver: "beta0.2",
        apkName: "estoon-beta0.2.apk",
        versionCode: "2",
        mark: ["这是第一个用于测试版本更新的版本", "新增 生产入库功能", "新增 扫码入库功能", "新增 其他基本操作", "新增 版本更新功能"],
        time: "2019-06-25 13:39"
    },
    {
        ver: "beta0.3",
        apkName: "estoon-beta0.3.apk",
        versionCode: "3",
        mark: ["加入了开发者设置功能", "加入了开发者设置功能", "新增 开发者设置可以设置请求地址", "优化 登录界面的点击动画"],
        time: "2019-06-25 14:41"
    },
    {
        ver: "beta0.4",
        apkName: "estoon-beta0.4.apk",
        versionCode: "4",
        mark: ["此版本有大量更新", "新增 扫码仓位调度功能", "新增 图标点击加入动画效果", "新增 菜单功能", "新增 企业信息菜单", "新增 个人中心菜单", "优化 登录如果超时无需重新登录", "提高 系统稳定性", "修复 入库数量输入框显示异常的问题"],
        time: "2019-06-29 14:52"
    },
    {
        ver: "beta0.5",
        apkName: "estoon-beta0.5.apk",
        versionCode: "5",
        mark: ["此版本有大量更新", "新增 商品库存余额表功能", "新增 库存明细账", "优化 适配7.0以上系统安装更新", "优化 邀请码可以长按复制", "修复 菜单中如果只有一个子菜单时会无法显示子菜单的问题"],
        time: "2019-07-04 16:40"
    },
    {
        ver: "beta0.5.1",
        apkName: "estoon-beta0.5.1.apk",
        versionCode: "6",
        mark: ["修复若干bug", "优化 U：已扫码商品入库加入Loading等待遮罩", "提高 系统稳定性"],
        time: "2019-07-06 08:18"
    },
    {
        ver: "beta0.6",
        apkName: "estoon-beta0.6.apk",
        versionCode: "7",
        mark: ["加入通知功能", "修复 若干问题", "提高 系统稳定性"],
        time: "2019-07-12 15:13"
    },
    {
        ver: "beta0.7",
        apkName: "estoon-beta0.7.apk",
        versionCode: "8",
        mark: ["加入出入库功能", "加入 出入库功能", "修复 若干问题", "提高 系统稳定性"],
        time: "2019-07-17 17:34"
    },
    {
        ver: "beta0.7.1",
        apkName: "estoon-beta0.7.1.apk",
        versionCode: "9",
        mark: ["开发者加入新地址", "加入 xgq内网穿透请求地址"],
        time: "2019-07-23 15:58"
    },
    {
        ver: "beta0.8",
        apkName: "estoon-beta0.8.apk",
        versionCode: "10",
        mark: ["此版本有大量更新，请马上升级", "加入 出库和入库管理", "将采购、生产、退货、移库等入库操作合并到入库管理中", "将销售、退货、移库等出库操作合并到出库管理中", "提高登录速度", "设置更长的请求超时时间", "出库时，只显示私有仓库", "若干重要升级", "修复若干错误，提高软件稳定性"],
        time: "2019-08-07 10:24"
    },
    {
        ver: "beta1.0",
        apkName: "estoon-beta1.0.apk",
        versionCode: "11",
        mark: ["此版本有大量更新，请马上升级", "扫码加入删除功能", "调整标题栏按钮大小", "修改仓库选择的控件，更美观统一", "筛选字段的输入框，禁用换行", "修复若干错误，提高软件稳定性"],
        time: "2019-08-13 16:15"
    },
    {
        ver: "beta1.1",
        apkName: "estoon-beta1.1.apk",
        versionCode: "12",
        mark: ["此版本修复紧急bug，请马上升级", "加入对物料的出入库支持", "修复出入库管理，存在物料时候会停止运行的错误"],
        time: "2019-09-15 9:20"
    },
    {
        ver: "beta1.1.1",
        apkName: "estoon-beta1.1.1.apk",
        versionCode: "13",
        mark: ["修复库存余额表查看识别码页面中，刷新页面时，显示异常的错误"],
        time: "2019-09-15 13:56"
    },
    {
        ver: "beta1.2",
        apkName: "estoon-beta1.2.apk",
        versionCode: "14",
        mark: ["本版本修复了严重bug，请立即更新", "修复扫码入库可以选择物料仓如库的问题", "修复移库功能无法正常使用的问题"],
        time: "2019-09-17 11:20"
    },
    {
        ver: "beta1.3",
        apkName: "estoon-beta1.3.apk",
        versionCode: "15",
        mark: ["本版本修复了严重bug，请立即更新", "修复扫码移库功能无法正常使用的问题"],
        time: "2019-09-18 09:20"
    },
    {
        ver: "beta1.4",
        apkName: "estoon-beta1.4.apk",
        versionCode: "16",
        mark: ["本版本修复了严重bug，请立即更新", "修复需要验证码登录时，验证码可能无法显示的问题"],
        time: "2019-10-06 10:03"
    },
    {
        ver: "beta1.4.1",
        apkName: "estoon-beta1.4.1.apk",
        versionCode: "17",
        mark: ["本版本修复了若干显示错误，请立即更新", "优化性能，提升用户体验"],
        time: "2019-10-16 11:29"
    },
    {
        ver: "beta1.4.2",
        apkName: "estoon-beta1.4.2.apk",
        versionCode: "18",
        mark: ["本版本修复了若干显示错误，请立即更新", "优化性能，提升用户体验"],
        time: "2019-10-16 15:29"
    },
    {
        ver: "beta1.4.3",
        apkName: "estoon-beta1.4.3.apk",
        versionCode: "19",
        mark: ["本版本修复了若干显示错误，请立即更新", "优化性能，提升用户体验", "修复 没有网络时, 可能导致崩溃的问题", "修复 权限不足导致操作异常的问题"],
        time: "2019-11-16 15:14"
    },
    {
        ver: "beta1.4.4",
        apkName: "estoon-beta1.4.4.apk",
        versionCode: "20",
        mark: ["本版本修复了若干显示错误，请立即更新", "优化性能，提升用户体验", "修复 没有网络时, 可能导致白屏无法启动的问题"],
        time: "2019-11-30 17:50"
    },
    {
        ver: "beta1.4.5",
        apkName: "estoon-beta1.4.5.apk",
        versionCode: "21",
        mark: ["修复一些已知问题", "修复 网络较慢时, 快速扫码可能导致识别码重复无法入库的问题"],
        time: "2019-12-06 13:06"
    },
    {
        ver: "beta1.4.6",
        apkName: "estoon-beta1.4.6.apk",
        versionCode: "22",
        mark: ["提升系统稳定性"],
        time: "2019-12-06 13:06"
    }
];

const updateUrl = "https://www.estoon.com/assets/androidApp/";

function getLastVer() {
    return ver.slice(-1)[0];
}
