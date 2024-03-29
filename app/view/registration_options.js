/*
 * File: app/view/registration_options.js
 * Date: Sat May 11 2013 17:27:42 GMT+0300 (E. Africa Standard Time)
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('FlexiPay.view.registration_options', {
    extend: 'Ext.Container',
    alias: 'widget.registration_options',

    config: {
        id: 'register_options',
        padding: '0 40px',
        autoDestroy: false,
        layout: {
            type: 'vbox'
        },
        scrollable: true,
        defaults: {
            margin: '10px',
            iconCls: 'user',
            iconMask: true
        },
        items: [
            {
                xtype: 'fieldset',
                title: 'Choose Account Type:-'
            },
            {
                xtype: 'button',
                flex: 1,
                id: 'merchant',
                text: 'Merchant A/C'
            },
            {
                xtype: 'button',
                flex: 1,
                id: 'agent',
                text: 'Agent A/C'
            },
            {
                xtype: 'button',
                flex: 1,
                id: 'customer',
                text: 'Customer A/C'
            }
        ]
    }

});