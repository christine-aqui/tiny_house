import React, { FunctionComponent, useState } from 'react';
import { server } from '../../lib/api';
import {
	Listing,
	ListingsData,
	DeleteListingData,
	DeleteListingVariables
} from './types';

// graphQL query
const LISTINGS = `
	query {
		listings {
			id
			title
			image
			address
			price
			numOfGuests
			numOfBeds
			numOfBaths
			rating
		}
	}
`;

// in grapql a var is noted with a $
// the ! means its required
const DELETE_LISTING = `
  mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) {
      id
    }
  }
`;

interface Props {
	title: string;
}

export const Listings = ({ title }: Props) => {
	const [listings, setListings] = useState<Listing[] | null>(null);

	const fetchListings = async () => {
		const { data } = await server.fetch<ListingsData>({ query: LISTINGS });
		console.log(data);
		setListings(data.listings);
	};

	const deleteListing = async (id: string) => {
		await server.fetch<DeleteListingData, DeleteListingVariables>({
			query: DELETE_LISTING,
			variables: {
				id: id
			}
		});
		fetchListings();
	};

	const listingsList = listings ? (
		<ul>
			{listings.map(listing => {
				return (
					<li key={listing.id}>
						{listing.title}
						<button onClick={() => deleteListing(listing.id)}>Delete</button>
					</li>
				);
			})}
		</ul>
	) : null;

	return (
		<div>
			<h2>{title} </h2>
			{listingsList}
			<button onClick={fetchListings}>Query listings!</button>
		</div>
	);
};

// export const Listings2: FunctionComponent<Props> = ({ title, children }) => {
// 	return <h2>{title} </h2>;
// };
