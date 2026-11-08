import {Config} from '@remotion/cli/config';

// Every campaign's assets live in ../campaigns, which is served as the public dir.
// So staticFile('alphalink-electrical/assets/logo.png') -> campaigns/alphalink-electrical/assets/logo.png
Config.setPublicDir('../campaigns');
Config.setVideoImageFormat('jpeg');
Config.setJpegQuality(92);
Config.setOverwriteOutput(true);
Config.setConcurrency(null); // auto
