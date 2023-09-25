<?php

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

if (!defined('TYPO3_MODE')) {
    die ('Access denied.');
}

/* Ein Beispiel wie man das TCA Array manipulieren kann um weitere Header-Bilder Crop-Varianten zu erzeugen, zu entfernen oder zu ändern. */

/*
$GLOBALS['TCA']['pages']['columns']['heroimage']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants']['xs']['allowedAspectRatios']['1:2'] = [
    'title' => 'LLL:EXT:core/Resources/Private/Language/locallang_wizards.xlf:imwizard.ratio.1_2',
    'value' => 1 / 2
];
*/


ExtensionManagementUtility::registerPageTSConfigFile(
    'tft',
    'Configuration/TsConfig/Page/config.tsconfig',
    'PageTS Einstellungen für das Template'
);


ExtensionManagementUtility::registerPageTSConfigFile(
    'tft',
    'Configuration/TsConfig/Page/fontAwesome.tsconfig',
    'FontAwesome Icons'
);

/* extended image designs */
foreach (['None','Bubba','Dexter','Honey','Layla','Lily','Chico','Milo','Romeo','Roxy','Ruby','Sadie','Sarah'] as $extendedDesign) {
    ExtensionManagementUtility::registerPageTSConfigFile(
        'tft',
        'Configuration/TsConfig/Images/ExtendedDesigns/'.$extendedDesign.'.tsconfig',
        'Erweitertes Bild-Design: '.$extendedDesign
    );
}



/* Registrierung der verschiedenen News-Layouts */

ExtensionManagementUtility::registerPageTSConfigFile(
    'tft',
    'Configuration/TsConfig/Page/NewsLayouts/Default.tsconfig',
    'News Layout - Standard'
);

ExtensionManagementUtility::registerPageTSConfigFile(
    'tft',
    'Configuration/TsConfig/Page/NewsLayouts/Slim.tsconfig',
    'News Layout - Schmale Vorschau'
);

ExtensionManagementUtility::registerPageTSConfigFile(
    'tft',
    'Configuration/TsConfig/Page/NewsLayouts/TimelineCardsAlternately.tsconfig',
    'News Layout - Zeitleiste, abwechselnd'
);

ExtensionManagementUtility::registerPageTSConfigFile(
    'tft',
    'Configuration/TsConfig/Page/NewsLayouts/TimelineCardsStraight.tsconfig',
    'News Layout - Zeitleiste, untereinander'
);

ExtensionManagementUtility::registerPageTSConfigFile(
    'tft',
    'Configuration/TsConfig/Page/NewsLayouts/RightImageLatest.tsconfig',
    'News Layout - Quadratisches Bild rechts'
);

ExtensionManagementUtility::registerPageTSConfigFile(
    'tft',
    'Configuration/TsConfig/Page/NewsLayouts/BackgroundImageLatest.tsconfig',
    'News Layout - Vorschau bild Bildhintergrund'
);

ExtensionManagementUtility::registerPageTSConfigFile(
    'tft',
    'Configuration/TsConfig/Page/NewsLayouts/NewsBlock.tsconfig',
    'News Layout - Block'
);

/* Background Colors */
ExtensionManagementUtility::registerPageTSConfigFile(
    'tft',
    'Configuration/TsConfig/BackgroundColors/BackgroundColors.tsconfig',
    'Angepasste Hintergrundfarben (Siehe: /tft/Configuration/TsConfig/BackgroundColors/BackgroundColors.tsconfig)'
);

/* Animation On Scroll */
ExtensionManagementUtility::registerPageTSConfigFile(
    'tft',
    'Configuration/TsConfig/Aos/AnimationOnScroll.tsconfig',
    'Animation On Scroll (Siehe: /tft/Configuration/TsConfig/Aos/AnimationOnScroll.tsconfig)'
);
