'use strict';

angular.module('demoApp', []).config(function(PropsWidgetConfig) {
	// angular-props-widget configuration
	PropsWidgetConfig.iconlib = 'bootstrap3';
	PropsWidgetConfig.theme = 'bootstrap3';
	PropsWidgetConfig.sku_table_label_price = '价格';
	PropsWidgetConfig.sku_table_label_stock = '库存';
	PropsWidgetConfig.sku_table_label_image = '图片';
	PropsWidgetConfig.language = 'zh';
}).controller('AppController', function($scope) {

	$scope.keyPropsSch = {
		title: 'House Properties',
		type: 'object',
		properties: {
			'name': {
				type: 'string',
				required: true,
				minLength: 1
			},
			'years': {
				type: 'integer',
				required: true,
				min: 0
			},
			'facilities': {
				type: 'array',
				uniqueItems: true,
				format: 'checkbox',
				items: {
					type: 'string',
					'enum': ['Air Condition', 'Hot Water', 'TV', 'Washing Machine']
				}
			}
		}
	};

	$scope.myKeyProps = {};

	$scope.skuPropsSch = {
		title: 'Product SKU',
		type: 'object',
		properties: {
			'color': {
				type: 'array',
				uniqueItems: true,
				format: 'checkbox',
				items: {
					type: 'string',
					'enum': ['red', 'blue', 'yellow', 'grey', 'light green', 'orange', 'light yellow']
				}
			},
			'size': {
				type: 'array',
				uniqueItems: true,
				format: 'checkbox',
				items: {
					type: 'string',
					'enum': ['S', 'M', 'L', 'XL', 'XXL']
				}
			}
		}
	};

	$scope.mySkuProps = {
	};

	$scope.mySkuTable = [];

	$scope.logPrint = function() {
		console.log('myKeyProps: ' + JSON.stringify($scope.myKeyProps));
		console.log('mySkuProps: ' + JSON.stringify($scope.mySkuProps));
		console.log('mySkuTable: ' + JSON.stringify($scope.mySkuTable));
	};

	var state = -1;
	$scope.changeSchema = function() {
		var keyPropsSchList = [{
			title: 'Service Properties',
			type: 'object',
			properties: {
				'Living Environment': {
					type: 'string',
					required: true,
					'enum': ['simple decoration','decoration','luxury decoration']
				},
				'Room Configuration': {
					type: 'array',
					uniqueItems: true,
					format: 'checkbox',
					items: {
						type: 'string',
						'enum':  ['bed','cabinet','table','chair','sofa','24 hours hot water']
					}
				},
				'facilities': {
					type: 'array',
					uniqueItems: true,
					format: 'checkbox',
					items: {
						type: 'string',
						'enum':  ['Gym','chess room','library', 'activity room']
					}
				}
			}
		}, {
			title: 'Service Properties',
			type: 'object',
			properties: {
				'name': {
					type: 'string',
					required: true,
					minLength: 1
				},
				'address': {
					type: 'string',
					required: true,
					minLength: 1
				},
				'expire': {
					type: 'string',
					required: true,
					minLength: 1
				},
				'open': {
					type: 'string',
					required: true,
					minLength: 1
				},
				'fees': {
					type: 'string',
					required: true,
					minLength: 1
				}
			}
		}, {
			title: 'Service Properties',
			type: 'object',
			properties: {
				'insurance companies': {
					type: 'string',
					required: true,
					minLength: 1
				},
				'trip purpose': {
					type: 'string',
					required: true,
					minLength: 1
				},
				'travel area': {
					type: 'array',
					uniqueItems: true,
					format: 'checkbox',
					items: {
						type: 'string',
						'enum': ['domestic', 'abroad']
					}
				}
			}
		}];
		state = (state + 1) % keyPropsSchList.length;
		$scope.keyPropsSch = keyPropsSchList[state];
		
		var skuPropSchList =[
			{
				type: 'object',
				properties: {
					'套餐': {
						type: 'array',
						uniqueItems: true,
						format: 'checkbox',
						items: {
							type: 'string',
							'enum': ['套餐1', '套餐2', '套餐3']
						}
					}
				}
			},
			{
				type: 'object',
				properties: {
					'方向': {
						type: 'array',
						uniqueItems: true,
						format: 'checkbox',
						items: {
							type: 'string',
							'enum': ['东', '西', '南', '北']
						}
					}
				}
			},
			{
				type: 'object',
				properties: {
					'楼层': {
						type: 'array',
						uniqueItems: true,
						format: 'checkbox',
						items: {
							type: 'number',
							'enum': [1, 2, 3, 4]
						}
					}
				}
			}
		];
		$scope.skuPropsSch = skuPropSchList[state];
	};


});
