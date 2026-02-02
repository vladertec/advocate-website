export type Language = "uk" | "en" | "de" | "fr" | "pl" | "sv"

export interface Translations {
  nav: {
    home: string
    about: string
    services: string
    cases: string
    blog: string
    materials: string
    contact: string
    consultation: string
  }
  hero: {
    title: string
    name: string
    subtitle: string
    description: string
    slogan: string[]
    urgent: string
    consultation: string
  }
  services: {
    title: string
    allServices: string
    items: Array<{
      title: string
      description: string
    }>
  }
  advantages: {
    title: string
    items: Array<{
      title: string
      description: string
    }>
  }
  quickOffers: {
    title: string
    subtitle: string
    details: string
  }
  cases: {
    title: string
    subtitle: string
    allCases: string
    items: Array<{
      id: string
      title: string
      description: string
      result: string
    }>
  }
  blog: {
    title: string
    allPosts: string
    backToBlog: string
    recentPosts: string
  }
  materials: {
    title: string
    subtitle: string
    download: string
    getMaterial: string
    description: string
    emailRequired: string
  }
  contact: {
    title: string
    subtitle: string
    quickContacts: string
    phone: string
    email: string
    telegram: string
    workingHours: string
    workingHoursText: string
    sendMessage: string
  }
  consultation: {
    title: string
    subtitle: string
    steps: Array<{
      number: string
      title: string
      description: string
    }>
    leaveRequest: string
    formDescription: string
  }
  landing: {
    title: string
    titleHighlight: string
    subtitle: string
    description: string
    urgent: string
    callNow: string
    getConsultation: string
    features: Array<{
      title: string
      description: string
    }>
  }
  notFound: {
    title: string
    subtitle: string
    description: string
    backHome: string
  }
  cta: {
    title: string
    subtitle: string
    call: string
    email: string
    telegram: string
    getConsultation: string
  }
  form: {
    name: string
    phone: string
    email: string
    message: string
    send: string
    sending: string
    success: string
    error: string
    required: string
    invalidEmail: string
    successMessage: string
    errorMessage: string
    submit: string
  }
  about: {
    title: string
    name: string
    achievements: Array<{
      text: string
    }>
    experience: {
      title: string
      text: string
    }
    specialization: {
      title: string
      text1: string
      text2: string
    }
    approach: {
      title: string
      text: string
    }
  }
  servicesPage: {
    title: string
    subtitle: string
    allServices: string
    serviceDetails: string
    serviceItems: Array<{
      id: string
      title: string
      description: string
    }>
  }
  casesPage: {
    title: string
    subtitle: string
    problem: string
    risks: string
    actions: string
    result: string
    critical: string
    cases: Array<{
      problem: string
      risks: string
      actions: string[]
      result: string
      critical: string
    }>
  }
  blogPage: {
    title: string
    subtitle: string
    posts: Array<{
      slug: string
      title: string
      excerpt: string
      category: string
    }>
  }
  footer: {
    description: string
    menu: string
    services: string
    contact: string
    copyright: string
  }
  modal: {
    consultation: string
    close: string
  }
  breadcrumbs: {
    home: string
    about: string
    services: string
    cases: string
    blog: string
    materials: string
    contact: string
    consultation: string
  }
  materialsPage: {
    materials: Array<{
      title: string
      description: string
    }>
  }
  serviceDetails: {
    howItWorks: string
    whatToDo: string
    faq: string
  }
  common: {
    readMore: string
    details: string
    back: string
  }
}
