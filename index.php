<!DOCTYPE HTML>

<html>
    <head>
        <?php require_once('components/site_components/head.html'); ?>
        <title>Angular CMS</title>
    </head>

    <body>
    	<div class="wrapper">

            <?php require_once('components/site_components/header.html'); ?>

    		<div class="content-wrapper">
                <div class="content">

                    <div ng-app="productApp">
                        <div ng-controller="productCtrl">
                            
                        </div>
                    </div>

                </div>
            </div>

            <?php require_once('components/site_components/footer.html'); ?>

    	</div>
    </body>

    <?php require_once('components/site_components/scripts.html'); ?>

</html>