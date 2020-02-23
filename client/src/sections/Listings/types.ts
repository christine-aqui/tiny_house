export interface Listing {
	id: string;
	title: string;
	image: string;
	address: string;
	price: number;
	numOfGuests: number;
	numOfBeds: number;
	numOfBaths: number;
	rating: number;
}

export interface ListingsData {
	listings: Listing[];
	// figured out by console log and saw the shape of the data.
}

export interface DeleteListingData {
	deleteListing: Listing;
}

export interface DeleteListingVariables {
	id: string;
}
