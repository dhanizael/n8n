import {
	INodeProperties,
} from 'n8n-workflow';

import {
	personAdditionalFieldsOptions,
} from './SharedFields';

export const personOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'person',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
			},
			{
				name: 'Get',
				value: 'get',
			},
			{
				name: 'Get All',
				value: 'getAll',
			},
			{
				name: 'Update',
				value: 'update',
			},
		],
		default: 'create',
		description: 'Operation to perform',
	},
] as INodeProperties[];

export const personFields = [
	// ----------------------------------------
	//              person: create
	// ----------------------------------------
	{
		displayName: 'Email Address', // on create, only _one_ must be passed in
		name: 'email_addresses',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Email Address Field',
		description: 'Person’s email addresses.',
		displayOptions: {
			show: {
				resource: [
					'person',
				],
				operation: [
					'create',
				],
			},
		},
		options: [
			{
				displayName: 'Email Addresses Fields',
				name: 'email_addresses_fields',
				values: [
					{
						displayName: 'Address',
						name: 'address',
						type: 'string',
						default: '',
						description: 'Person\'s email address.',
					},
					{
						displayName: 'Primary',
						name: 'primary',
						type: 'boolean',
						default: false,
						description: 'Whether this is the person\'s primary email address.',
					},
					{
						displayName: 'Status',
						name: 'status',
						type: 'options',
						default: 'subscribed',
						description: 'Subscription status of this email address.',
						options: [
							{
								name: 'Bouncing',
								value: 'bouncing',
							},
							{
								name: 'Previous Bounce',
								value: 'previous bounce',
							},
							{
								name: 'Previous Spam Complaint',
								value: 'previous spam complaint',
							},
							{
								name: 'Spam Complaint',
								value: 'spam complaint',
							},
							{
								name: 'Subscribed',
								value: 'subscribed',
							},
							{
								name: 'Unsubscribed',
								value: 'unsubscribed',
							},
						],
					},
				],
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'person',
				],
				operation: [
					'create',
				],
			},
		},
		options: personAdditionalFieldsOptions,
	},

	// ----------------------------------------
	//               person: get
	// ----------------------------------------
	{
		displayName: 'Person ID',
		name: 'personId',
		description: 'ID of the person to retrieve.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'person',
				],
				operation: [
					'get',
				],
			},
		},
	},

	// ----------------------------------------
	//              person: getAll
	// ----------------------------------------
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Return all results.',
		displayOptions: {
			show: {
				resource: [
					'person',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		description: 'The number of results to return.',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: {
				resource: [
					'person',
				],
				operation: [
					'getAll',
				],
				returnAll: [
					false,
				],
			},
		},
	},

	// ----------------------------------------
	//              person: update
	// ----------------------------------------
	{
		displayName: 'Person ID',
		name: 'personId',
		description: 'ID of the person to update.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'person',
				],
				operation: [
					'update',
				],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'person',
				],
				operation: [
					'update',
				],
			},
		},
		options: personAdditionalFieldsOptions,
	},
] as INodeProperties[];