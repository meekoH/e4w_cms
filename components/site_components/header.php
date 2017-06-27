<header>
	<div class="mobile-visible res-nav-open-btn-container">
		<a href="#" id="resNavOpen" onclick="return false;">
            <div id="resNavIcon">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </a>
	</div>
	<div class="display-table fl">
		<div class="display-row">
			<div class="display-cell header-logo">
				<?php include('img/main-logo.svg'); ?>
			</div>
			<div class="display-cell">
				<span class="header-title">Evan <span class="e4w-blue">4</span> Web</span>
			</div>
		</div>
	</div>
	<div class="fr res-nav-close-btn-container">
		<a href="#" id="resNavClose" onclick="return false;">
			<div id="resNavIcon">
                <span></span>
                <span></span>
            </div>
		</a>
	</div>
	<div class="display-table fr ta-right fw-light login-info" ng-if="loggedInContent">
		<div class="display-row">
			<div class="display-cell">
				Welcome back, <span class="login-info-name e4w-blue">Evan<span class="mobile-hidden"> Paradis</span></span>.

				<span class="login-info-controls ta-right">
					<a href="#">
						Settings <i class="fa fa-lg fa-cog" aria-hidden="true"></i>
					</a>
					<a href="#/">
						Logout <i class="fa fa-lg fa-power-off" aria-hidden="true"></i>
					</a>
				</span>
			</div>
		</div>
	</div>
	<div class="clear"></div>
</header>