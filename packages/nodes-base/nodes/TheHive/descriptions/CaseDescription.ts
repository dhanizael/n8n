import {
	INodeProperties,
} from 'n8n-workflow';

import {
	TLP,
} from '../interfaces/AlertInterface';

export const caseOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		default: 'getAll',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'case',
				],
			},
		},
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
			],
			loadOptionsMethod: 'loadCaseOptions',
		},
	},
] as INodeProperties[];

export const caseFields = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'case',
				],
			},
		},
		default: false,
		description: 'If all results should be returned or only up to a given limit.',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'case',
				],
				returnAll: [
					false,
				],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 100,
		description: 'How many results to return.',
	},
	// Required fields
	{
		displayName: 'Case ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'case',
				],
				operation: [
					'update',
					'executeResponder',
					'get',
				],
			},
		},
		description: 'ID of the case',
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'case',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Title of the case',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'case',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Description of the case',
	},
	{
		displayName: 'Severity',
		name: 'severity',
		type: 'options',
		options: [
			{
				name: 'Low',
				value: 1,
			},
			{
				name: 'Medium',
				value: 2,
			},
			{
				name: 'High',
				value: 3,
			},
		],
		required: true,
		default: 2,
		displayOptions: {
			show: {
				resource: [
					'case',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Severity of the alert. Default=Medium',
	},
	{
		displayName: 'Start Date',
		name: 'startDate',
		type: 'dateTime',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'case',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Date and time of the begin of the case default=now',
	},
	{
		displayName: 'Owner',
		name: 'owner',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'case',
				],
				operation: [
					'create',
				],
			},
		},
	},
	{
		displayName: 'Flag',
		name: 'flag',
		type: 'boolean',
		required: true,
		default: false,
		displayOptions: {
			show: {
				resource: [
					'case',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Flag of the case default=false',
	},
	{
		displayName: 'TLP',
		name: 'tlp',
		type: 'options',
		required: true,
		default: 2,
		options: [
			{
				name: 'White',
				value: TLP.white,
			},
			{
				name: 'Green',
				value: TLP.green,
			},
			{
				name: 'Amber',
				value: TLP.amber,
			},
			{
				name: 'Red',
				value: TLP.red,
			},
		],
		displayOptions: {
			show: {
				resource: [
					'case',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Traffict Light Protocol (TLP). Default=Amber',
	},
	{
		displayName: 'Tags',
		name: 'tags',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'case',
				],
				operation: [
					'create',
				],
			},
		},
	},
	// required for responder execution
	{
		displayName: 'Responder ID',
		name: 'responder',
		type: 'options',
		default: '',
		required: true,
		typeOptions: {
			loadOptionsDependsOn: [
				'id',
			],
			loadOptionsMethod: 'loadResponders',
		},
		displayOptions: {
			show: {
				resource: [
					'case',
				],
				operation: [
					'executeResponder',
				],
			},
			hide: {
				id: [
					'',
				],
			},
		},
	},
	// Optional fields (Create operation)
	{
		displayName: 'Options',
		type: 'collection',
		name: 'options',
		placeholder: 'Add options',
		displayOptions: {
			show: {
				resource: [
					'case',
				],
				operation: [
					'create',
				],
			},
		},
		required: false,
		default: '',
		options: [
			{
				displayName: 'End Date',
				name: 'endDate',
				default: '',
				type: 'dateTime',
				description: 'Resolution date',
			},
			{
				displayName: 'Summary',
				name: 'summary',
				type: 'string',
				default: '',
				description: 'Summary of the case, to be provided when closing a case',
			},
			{
				displayName: 'Metrics (JSON)',
				name: 'metrics',
				default: '[]',
				type: 'json',
				description: 'List of metrics',
			},
		],
	},
	// Optional fields (Update operations)
	{
		displayName: 'Update Fields',
		type: 'collection',
		name: 'updateFields',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: [
					'case',
				],
				operation: [
					'update',
				],
			},
		},
		required: false,
		default: '',
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Description of the case',
			},
			{
				displayName: 'End Date',
				name: 'endDate',
				type: 'dateTime',
				default: '',
				description: 'Resolution date',
			},
			{
				displayName: 'Flag',
				name: 'flag',
				type: 'boolean',
				default: false,
				description: 'Flag of the case default=false',
			},
			{
				displayName: 'Impact Status',
				name: 'impactStatus',
				type: 'options',
				default: '',
				options: [
					{
						name: 'No Impact',
						value: 'NoImpact',
					},
					{
						name: 'With Impact',
						value: 'WithImpact',
					},
					{
						name: 'Not Applicable',
						value: 'NotApplicable',
					},
				],
				description: 'Impact status of the case',
			},
			{
				displayName: 'Metrics (JSON)',
				name: 'metrics',
				type: 'json',
				default: '[]',
				description: 'List of metrics',
			},
			{
				displayName: 'Owner',
				name: 'owner',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Resolution Status',
				name: 'resolutionStatus',
				type: 'options',
				default: '',
				options: [
					{
						value: 'Indeterminate',
						name: 'Indeterminate',
					},
					{
						value: 'False Positive',
						name: 'FalsePositive',
					},
					{
						value: 'True Positive',
						name: 'TruePositive',
					},
					{
						value: 'Other',
						name: 'Other',
					},
					{
						value: 'Duplicated',
						name: 'Duplicated',
					},
				],
				description: 'Resolution status of the case',
			},
			{
				displayName: 'Severity',
				name: 'severity',
				type: 'options',
				options: [
					{
						name: 'Low',
						value: 1,
					},
					{
						name: 'Medium',
						value: 2,
					},
					{
						name: 'High',
						value: 3,
					},
				],
				default: 2,
				description: 'Severity of the alert. Default=Medium',
			},
			{
				displayName: 'Start Date',
				name: 'startDate',
				type: 'dateTime',
				default: '',
				description: 'Date and time of the begin of the case default=now',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Open',
						value: 'Open',
					},
					{
						name: 'Resolved',
						value: 'Resolved',
					},
					{
						name: 'Deleted',
						value: 'Deleted',
					},
				],
				default: 'Open',
			},
			{
				displayName: 'Summary',
				name: 'summary',
				type: 'string',
				default: '',
				description: 'Summary of the case, to be provided when closing a case',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Title of the case',
			},
			{
				displayName: 'TLP',
				name: 'tlp',
				type: 'options',
				default: 2,
				options: [
					{
						name: 'White',
						value: TLP.white,
					},
					{
						name: 'Green',
						value: TLP.green,
					},
					{
						name: 'Amber',
						value: TLP.amber,
					},
					{
						name: 'Red',
						value: TLP.red,
					},
				],
				description: 'Traffict Light Protocol (TLP). Default=Amber',
			},
		],
	},
	// query options
	{
		displayName: 'Options',
		name: 'options',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'case',
				],
			},
		},
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		options: [
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'string',
				placeholder: '±Attribut, exp +status',
				description: 'Specify the sorting attribut, + for asc, - for desc',
				default: '',
			},
		],
	},
	// Query filters
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		required: false,
		default: {},
		placeholder: 'Add a Filter',
		displayOptions: {
			show: {
				resource: [
					'case',
				],
				operation: [
					'getAll',
					'count',
				],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Description of the case',
			},
			{
				displayName: 'End Date',
				name: 'endDate',
				type: 'dateTime',
				default: '',
				description: 'Resolution date',
			},
			{
				displayName: 'Flag',
				name: 'flag',
				type: 'boolean',
				default: false,
				description: 'Flag of the case default=false',
			},
			{
				displayName: 'Impact Status',
				name: 'impactStatus',
				type: 'options',
				default: '',
				options: [
					{
						name: 'No Impact',
						value: 'NoImpact',
					},
					{
						name: 'With Impact',
						value: 'WithImpact',
					},
					{
						name: 'Not Applicable',
						value: 'NotApplicable',
					},
				],
			},
			{
				displayName: 'Owner',
				name: 'owner',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Resolution Status',
				name: 'resolutionStatus',
				type: 'options',
				default: '',
				options: [
					{
						value: 'Indeterminate',
						name: 'Indeterminate',
					},
					{
						value: 'False Positive',
						name: 'FalsePositive',
					},
					{
						value: 'True Positive',
						name: 'TruePositive',
					},
					{
						value: 'Other',
						name: 'Other',
					},
					{
						value: 'Duplicated',
						name: 'Duplicated',
					},
				],
			},
			{
				displayName: 'Severity',
				name: 'severity',
				type: 'options',
				options: [
					{
						name: 'Low',
						value: 1,
					},
					{
						name: 'Medium',
						value: 2,
					},
					{
						name: 'High',
						value: 3,
					},
				],
				default: 2,
				description: 'Severity of the alert. Default=Medium',
			},
			{
				displayName: 'Start Date',
				name: 'startDate',
				type: 'dateTime',
				default: '',
				description: 'Date and time of the begin of the case default=now',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Open',
						value: 'Open',
					},
					{
						name: 'Resolved',
						value: 'Resolved',
					},
					{
						name: 'Deleted',
						value: 'Deleted',
					},
				],
				default: 'Open',
			},
			{
				displayName: 'Summary',
				name: 'summary',
				type: 'string',
				default: '',
				description: 'Summary of the case, to be provided when closing a case',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Title of the case',
			},
			{
				displayName: 'TLP',
				name: 'tlp',
				type: 'options',
				required: false,
				default: 2,
				options: [
					{
						name: 'White',
						value: TLP.white,
					},
					{
						name: 'Green',
						value: TLP.green,
					},
					{
						name: 'Amber',
						value: TLP.amber,
					},
					{
						name: 'Red',
						value: TLP.red,
					},
				],
				description: 'Traffict Light Protocol (TLP). Default=Amber',
			},
		],
	},
] as INodeProperties[];