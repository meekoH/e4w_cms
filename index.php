<!DOCTYPE HTML>

<html>
    <head>
        <?php require_once('components/site_components/head.html'); ?>
        <title>Content Management System - Evan 4 Web</title>
    </head>

    <body>
        <div class="wrapper" ng-app="e4wApp" ng-controller="e4wLoginCtrl">
            <e4w-header></e4w-header>

            <nav-list></nav-list>

            <div class="content-wrapper">
                <div ng-view data-content-height class="content"></div>
            </div>

            <div class="clear"></div>

            <?php require_once('components/site_components/footer.html'); ?>

        </div>
    </body>

    <?php require_once('components/site_components/scripts.html'); ?>

</html>