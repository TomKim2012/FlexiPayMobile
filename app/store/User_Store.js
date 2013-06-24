/*
 * File: app/store/User_Store.js
 * Date: Mon May 13 2013 15:47:19 GMT+0300 (E. Africa Standard Time)
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

Ext.define('FlexiPay.store.User_Store', {
    extend: 'Ext.data.Store',

    requires: [
        'FlexiPay.model.Users2'
    ],

    config: {
        model: 'FlexiPay.model.Users2',
        storeId: 'current_user',
        proxy: {
            type: 'localstorage',
            id: 'local'
        }
    }
});