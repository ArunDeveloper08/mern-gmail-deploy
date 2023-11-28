export const API_URLS ={
    saveSentEmail :{
        endpoint:'save',
        method:'POST'
    },
    getEmailFromType:{
        endpoint:"emails",
        method:"GET"
    },
    saveDraftEmails:{
        endpoint:"save-draft",
        method:"POST"
    },
    toggleStarredMails: {
        endpoint: 'starred',
        method: 'POST'
    },
    moveEmailstoBin:{
        endpoint:'bin',
        method:'POST'
    }
}