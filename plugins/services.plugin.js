import { contactService } from '../service/contact.service'

export default ({ app: { $axios } }, inject) => {
    // pass $axios as a dependency to the services constructor
    const contact = new contactService($axios)
    

    // inject the service, making it available in the context, component, store, etc.
    inject('contact', contact)
}