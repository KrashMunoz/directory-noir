export interface FireBusiness {
    id?: string;
    name: string;
    owner?: string
    category: string;
    social?: Social;
    contact?: Contact
}

export interface Social {
    instagram?: string;
    twitter?: string;
    facebook?: string;
}

export interface Contact {
    email?: string;
    website?: string;
}