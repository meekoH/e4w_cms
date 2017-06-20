<!DOCTYPE HTML>

<html>
    <head>
        <?php require_once('components/site_components/head.html'); ?>
        <title>Evan 4 Web - Content Management System</title>
    </head>

    <body>
    	<div class="wrapper">

            <?php require_once('components/site_components/header.php'); ?>

            <?php require_once('components/site_components/side_nav.php'); ?>

    		--><div class="content-wrapper">
                <div class="fat-box"></div>
                <div class="fat-box"></div>
                <div class="fat-box"></div>
                <div class="fat-box"></div>
                <div class="content">

                    <div ng-app="productApp">
                        <div ng-controller="productCtrl">
                            
                        </div>
                    </div>

                </div>
            </div>

            <?php require_once('components/site_components/footer.php'); ?>

    	</div>
    </body>

    <?php require_once('components/site_components/scripts.html'); ?>

</html>