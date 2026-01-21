// src/config/apiConfig.js

// 👇 Define dynamic API version
const apiVersion = import.meta.env.VITE_API_VERSION || "api/v2";

export default {
  // 👇 Define base API URL (you can also make this dynamic if needed)
  apiurl: "https://cs-new-staging-backend-int.powerpush.ai/",
  // import.meta.env.VITE_API_KEY === "production"
  //   ? "https://cs-backend-int-staging.powerpush.ai/"
  //   : "https://cs-backend-int-staging.powerpush.ai/",

  // 👇 Pass version dynamically
  apis: {
    // login
    login: `${apiVersion}/auth/login`,
    forgot_password: `${apiVersion}/auth/forgot-password`,
    reset_password: `${apiVersion}/auth/reset-password`,

    checkin: `${apiVersion}/users/checkin`,
    checkout: `${apiVersion}/users/checkout`,

    flows: `${apiVersion}/autoResponder/flow`,
    addflows: `${apiVersion}/autoResponder/flow`,
    idflows: `${apiVersion}/autoResponder/flow`,
    postflows: `${apiVersion}/autoResponder/flow`,

    putflows: `${apiVersion}/autoResponder/flow`,
    updateflow: `${apiVersion}/autoResponder/flow`,
    deleteflows: `${apiVersion}/autoResponder/flow`,
    toggleActiveStatusFlow: `${apiVersion}/autoResponder/flow/toggleActiveStatus`,
    publishFlow: `${apiVersion}/autoResponder/flow/publish`,

    // ticket
    ticket: `${apiVersion}/ticket`,
    ticketsfiltar: `${apiVersion}/ticket/filter/tickets`,
    customerDetails: `${apiVersion}/customer/contactinfo/customerDetails`,

    // messages
    sortOptions: `${apiVersion}/messages/filter/sortOptions`,
    conversationalFilters: `${apiVersion}/messages/filter/conversationalFilters`,
    messages: `${apiVersion}/messages`,
    messagesmarkseen: `${apiVersion}/messages/chatUpdate/markseen`,
    messagespoll: `${apiVersion}/messages/chatUpdate/poll-messages`,
    getTicketStatus: `${apiVersion}/ticket/ticket/getTicketStatus`,
    changeTicketStatus: `${apiVersion}/ticket/ticket/changeTicketStatus`,
    autoChatLogs: `${apiVersion}/autoChatLogs/`,

    //node
    addNode: `${apiVersion}/autoResponder/node`,
    removeNode: `${apiVersion}/autoResponder/node`,
    getNodeByFlowId: `${apiVersion}/autoResponder/node`,
    updateNode: `${apiVersion}/autoResponder/node`,

    // trigger
    trigger: `${apiVersion}/trigger`,
    idtrigger: `${apiVersion}/trigger`,

    // options
    postoptionBlock: `${apiVersion}/optionBlock`,
    idpostoptionBlock: `${apiVersion}/optionBlock`,

    // eachOption
    posteachOption: `${apiVersion}/eachOption`,
    optionsid: `${apiVersion}/options`,
    selectechopetion: `${apiVersion}/eachOption/select/`,

    // responseBlock
    responseBlock: `${apiVersion}/responseBlock`,
    responseBlockid: `${apiVersion}/responseBlock`,

    // endBlock
    endBlock: `${apiVersion}/endBlock`,
    endBlockid: `${apiVersion}/endBlock`,

    // role
    roles: `${apiVersion}/roles`,
    addroles: `${apiVersion}/roles`,
    deleteroles: `${apiVersion}/roles`,
    getListedUsersFromRoleId: `${apiVersion}/roles/getListedUsersFromRoleId/`,
    assignusers: `${apiVersion}/roles/assign-users`,

    // customer
    customer: `${apiVersion}/customer`,
    customerbyid: `${apiVersion}/customer`,
    updateCustomerInfo: `${apiVersion}/customer/contactinfo/updateCustomerInfo`,

    // user api
    users: `${apiVersion}/users`,
    usersid: `${apiVersion}/users`,
    userupadatestatus: `${apiVersion}/users`,
    deleteAgent: `${apiVersion}/users/deleteAgent/`,
    postusers: `${apiVersion}/users`,
    getManagers: `${apiVersion}/users/managers/getManagers`,

    // permissions
    managePermission1: `${apiVersion}/permissions`,
    managePermissionid: `${apiVersion}/permissions/roles`,
    managePermissionupdate: `${apiVersion}/permissions/roles`,
    checkPermission: `${apiVersion}/permissions/checkPermission/editContactInfo`,

    // settings
    settings: `${apiVersion}/settings/menu`,
    customerInfoDropdown: `${apiVersion}/settings/customerInfoDropdown`,
    getCustomerPermission: `${apiVersion}/settings/getCustomerPermission`,
    createCustomerPermission: `${apiVersion}/settings/createCustomerPermission`,

    getAgents: `${apiVersion}/agent/getAgents`,
    manualAssignAgent: `${apiVersion}/agent/manualAssignAgent`,
    fileUpload: `${apiVersion}/messages/fileUpload`,
  },
};
