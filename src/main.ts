const meta = document.createElement("meta")
meta.name = "naive-ui-style"
document.head.appendChild(meta)

import { createApp } from "vue"
import { createPinia } from "pinia"
import { createI18n } from "vue-i18n"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

import App from "@/App.vue"
import router from "@/router"
import { type Locales, type MessageSchema, getI18NConf } from "@/lang/config"
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'
import { JsonEditorPlugin } from 'vue3-ts-jsoneditor';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const i18n = createI18n<MessageSchema, Locales>(getI18NConf())

const app = createApp(App)
app.use(JsonEditorPlugin, {
    componentName:  '/componentName/',
    options: {},
});
app.use(pinia)
app.use(router)
app.use(i18n)
app.use(Vueform, vueformConfig)

app.mount("#app")