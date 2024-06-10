// Object containing guest and their information
const guests = {
    ANTONY: {
        title: 'General',
        region: 'Rome', 
        dietaryPreference: 'Vegetarian',
        pastGifts: ['Golden Laurel', 'Chariot']
    },

    CIERO: {
        title: 'Orator',
        region: 'Arpinum', 
        dietaryPreference: 'Omnivore',
        pastGifts: ['Scroll of proverbs', 'Quill'] 
    }
};

// Step 1:
guests.BRUTUS = {
    title: 'Senator',
    region: 'Rome',
    dietaryPreference: 'Vegan',
    pastGifts: ['Silver Dagger', 'Marbel Bust']
}

// Step 2:
guests.CIERO.pastGifts.push('Golden Lyre');

// Step 3:
let regionRetrieved = guests.ANTONY.region;

// Step 4:
delete guests.CIERO;

// Step 5:
guests.generalProfile = guests.ANTONY;
guests.generalProfile.region = 'Egypt';

// Question 1:
// Anthony's region will now be Egypt