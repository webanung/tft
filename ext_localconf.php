<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

if (\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('rte_ckeditor')) {
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['tft'] = 'EXT:tft/Configuration/RTE/Default.yaml';
}


