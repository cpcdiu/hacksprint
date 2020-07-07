-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2020 at 01:15 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hsmedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminpanel_practice`
--

CREATE TABLE `adminpanel_practice` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `body` longtext NOT NULL,
  `timestamp` datetime(6) NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `track_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adminpanel_practice`
--

INSERT INTO `adminpanel_practice` (`id`, `title`, `body`, `timestamp`, `author_id`, `track_id`) VALUES
(2, 'Basic Routing', '<p>Create a web application that will have 3 routes, home, about, contact. These page will display a relevent message.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Test Case:</strong></p>\r\n\r\n<ul>\r\n	<li>Home page will display &quot;This is homepage&quot;</li>\r\n	<li>About page will display &quot;This is about page&quot;</li>\r\n	<li>Contact page will display &quot;This is contact page&quot;</li>\r\n</ul>', '2020-06-19 05:32:46.070382', 1, 1),
(3, 'Using Template', '<p>Create a web application&nbsp;which will have 3 web pages. They are Home, About, Contact. This time you have render a template.</p>\r\n\r\n<ul>\r\n	<li>Homepage will render an HTML template with a message <strong>&quot;Hello World&quot;</strong>.</li>\r\n	<li>About page will will have some info about you.</li>\r\n	<li>Contact page will have an form with&nbsp;<strong>Name</strong>,&nbsp;<strong>Email</strong>,&nbsp;<strong>Message</strong>&nbsp;field and a submit button.</li>\r\n</ul>', '2020-06-19 05:38:37.198493', 1, 1),
(4, 'Build a Calculator', '<p>Suppose you want to build a calculator which can only perform four common operations (<strong>Summation</strong>, <strong>Subtraction</strong>, <strong>Multiplication</strong> and <strong>Division</strong>).<br />\r\n<br />\r\n<strong>The calculator should:</strong></p>\r\n\r\n<ul>\r\n	<li>Look&nbsp;something like this.</li>\r\n</ul>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img alt=\"\" src=\"https://raw.githubusercontent.com/cpcdiu/bootcamp-challenges/master/assets/web/img/calc.png\" style=\"height:116px; width:539px\" /></p>\r\n\r\n<ul>\r\n	<li>display the result on next page.</li>\r\n</ul>', '2020-06-19 05:48:22.751313', 1, 1),
(5, 'Styling a Web Page', '<p>A web page built with&nbsp;<strong>HTML</strong>&nbsp;is just a skeleton. You need&nbsp;<strong>CSS</strong>&nbsp;to style it. Make a webpage that will look like the following image.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"https://raw.githubusercontent.com/cpcdiu/bootcamp-challenges/master/assets/web/img/1.png\" style=\"height:418px; width:800px\" /></p>', '2020-06-19 05:51:00.402520', 1, 1),
(6, 'URL Parameter', '<p>In a web application&nbsp;you can pass parameter with URL. For example, If you make a request to&nbsp;<code>localhost:8000/sum/7/8</code>, your application can read the whole URL and perform action with it.</p>\r\n\r\n<p>Make an application that will have two integer number and action to perform.&nbsp;<code>localhost:8000/[action]/[number_1]/[number_2]</code></p>\r\n\r\n<p><strong>Test Case:</strong></p>\r\n\r\n<ol>\r\n	<li><code>localhost:8000/sum/7/8</code></li>\r\n	<li><code>localhost:8000/sub/70/50</code></li>\r\n</ol>\r\n\r\n<p><strong>Output:</strong></p>\r\n\r\n<ol>\r\n	<li>15</li>\r\n	<li>20</li>\r\n</ol>', '2020-06-19 06:03:53.290267', 1, 1),
(7, 'Word Counter', '<p>Build a word counter application that will count number of words in a given input submitted from HTML Form.</p>\r\n\r\n<p><strong>Requirements:</strong></p>\r\n\r\n<ol>\r\n	<li>The form will contain a textarea.</li>\r\n	<li>You have to count number of words.</li>\r\n	<li>Also how many times a word is used.</li>\r\n</ol>\r\n\r\n<p><strong>Test Case:</strong></p>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>\r\n\r\n<p><strong>Output:</strong><br />\r\nLorem - 2<br />\r\nipsum - 2<br />\r\ndolor - 2<br />\r\nsit - 2<br />\r\namet - 2<br />\r\nconsectetur - 1<br />\r\nadipiscing - 1<br />\r\nelit - 1</p>', '2020-06-19 06:08:04.157834', 1, 1),
(8, 'Fanbook Password Checker', '<p>A social media site named&nbsp;<strong>fanbook</strong>&nbsp;has over a million user. Most of the user don&#39;t have strong password. As a result hacker can easily guess the password and log into user&#39;s account.</p>\r\n\r\n<p>The company decided to set some rules for user password so that hacker can&#39;t guess easily. They want to hire you to strengthen their password checking&nbsp;system.</p>\r\n\r\n<p><strong>Password should have:</strong></p>\r\n\r\n<ul>\r\n	<li>At least 8 digit</li>\r\n	<li>Contain at least one Uppercase, Lowercase and special character</li>\r\n	<li>First digit can&#39;t be number</li>\r\n</ul>\r\n\r\n<p>Make a checker that can validate the password and if anything missing on the password your checker should give specific message to user what&#39;s missing.</p>', '2020-06-19 06:11:43.898005', 1, 1),
(9, 'Your First Blog Site', '<p>CRUD application generally means a facility where user of an app can&nbsp;<strong>Create</strong>,&nbsp;<strong>Read</strong>,&nbsp;<strong>Update</strong>&nbsp;and&nbsp;<strong>Delete</strong>&nbsp;data from database</p>\r\n\r\n<p><strong>In this challenge you have to build a blog application where:</strong></p>\r\n\r\n<ul>\r\n	<li>Home page&nbsp;will display all blogs.</li>\r\n	<li>A write blog page <code>localhost:8000/write</code>&nbsp;where user can write a blog.</li>\r\n	<li>User should update and delete blogs as well.</li>\r\n</ul>', '2020-06-19 06:19:37.839653', 1, 1),
(10, 'Acme Web Agency', '<p>Suppose you want to start an IT company named Acme Web. You will offer HTML5 markup, CSS3 styling and Graphic Design as service. Now you need to make a website for your company.</p>\r\n\r\n<p>Following image is the UI of your company website. All the content of the website is dynamic, that means contents will be loaded from database. Create correspondent database table for each information.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"https://raw.githubusercontent.com/cpcdiu/bootcamp-challenges/master/assets/web/img/acme.png\" style=\"height:581px; width:800px\" /></p>', '2020-06-19 06:22:51.597013', 1, 1),
(11, 'Link Shortner', '<p>In this challenge you have to make a link shortner like&nbsp;<a href=\"http://gg.gg/\" rel=\"nofollow\">gg.gg</a>. But add some feature as the following</p>\r\n\r\n<ol>\r\n	<li>User can short their link.</li>\r\n	<li>If anyone want to customize their link, they must be logged in.</li>\r\n	<li>Their will be limit (50 shortlink) for free user.</li>\r\n	<li>User can use 7 days trial for pro account.</li>\r\n	<li>Pro account will cost 100tk for each year.</li>\r\n	<li>Pro user can see analytics such as shortlink hit count</li>\r\n</ol>', '2020-06-19 06:23:45.847731', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `adminpanel_subdomain`
--

CREATE TABLE `adminpanel_subdomain` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `track_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adminpanel_subdomain`
--

INSERT INTO `adminpanel_subdomain` (`id`, `title`, `track_id`) VALUES
(1, 'Script', 1),
(2, 'XML', 2),
(3, 'Template', 1),
(4, 'Style', 1);

-- --------------------------------------------------------

--
-- Table structure for table `adminpanel_track`
--

CREATE TABLE `adminpanel_track` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `desc` longtext NOT NULL,
  `avatar` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adminpanel_track`
--

INSERT INTO `adminpanel_track` (`id`, `title`, `desc`, `avatar`) VALUES
(1, 'Web Development', 'Develop application for connected devices', 'http://res.cloudinary.com/shakilahmmeed/image/upload/v1590770244/zp7ijqfs7jedfpcb4cyq.jpg'),
(2, 'Android Development', 'something', 'http://res.cloudinary.com/shakilahmmeed/image/upload/v1593429624/zkiqiruxwmd3o4jyp5hd.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `authtoken_token`
--

CREATE TABLE `authtoken_token` (
  `key` varchar(40) NOT NULL,
  `created` datetime(6) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `authtoken_token`
--

INSERT INTO `authtoken_token` (`key`, `created`, `user_id`) VALUES
('1653934f1dc30be2649eb8b1b398587d609d70d9', '2020-05-30 15:19:06.513540', 3),
('166bc29ac993e9b20b6bc3e5fb8ad41574dcc4ee', '2020-06-09 12:53:53.664291', 8),
('177d77d219a9567fac97a0f32fd8be5cc124f2d0', '2020-06-09 10:46:56.875892', 6),
('41cb320de1c9cfe7a9fcfbf4327c096d41f31bb3', '2020-06-09 12:56:47.267431', 1),
('755f2d656b93d092d60edc1002c026b1db0fcb61', '2020-06-21 14:05:15.741743', 15),
('8a89de7bad843b9c983e261cbf31d8bec9205cdb', '2020-06-09 12:28:11.636370', 7),
('a15d73aa7f87a9d3ca0a94c26778047c583e0fe4', '2020-05-30 15:33:41.878301', 5),
('d46f0aca2d2fead8dbe2d18a050ed1ea62a9cdc5', '2020-05-30 15:36:01.425199', 4);

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add track', 1, 'add_track'),
(2, 'Can change track', 1, 'change_track'),
(3, 'Can delete track', 1, 'delete_track'),
(4, 'Can view track', 1, 'view_track'),
(5, 'Can add practice', 2, 'add_practice'),
(6, 'Can change practice', 2, 'change_practice'),
(7, 'Can delete practice', 2, 'delete_practice'),
(8, 'Can view practice', 2, 'view_practice'),
(9, 'Can add sub domain', 3, 'add_subdomain'),
(10, 'Can change sub domain', 3, 'change_subdomain'),
(11, 'Can delete sub domain', 3, 'delete_subdomain'),
(12, 'Can view sub domain', 3, 'view_subdomain'),
(13, 'Can add education', 4, 'add_education'),
(14, 'Can change education', 4, 'change_education'),
(15, 'Can delete education', 4, 'delete_education'),
(16, 'Can view education', 4, 'view_education'),
(17, 'Can add profile', 5, 'add_profile'),
(18, 'Can change profile', 5, 'change_profile'),
(19, 'Can delete profile', 5, 'delete_profile'),
(20, 'Can view profile', 5, 'view_profile'),
(21, 'Can add work experience', 6, 'add_workexperience'),
(22, 'Can change work experience', 6, 'change_workexperience'),
(23, 'Can delete work experience', 6, 'delete_workexperience'),
(24, 'Can view work experience', 6, 'view_workexperience'),
(25, 'Can add Token', 7, 'add_token'),
(26, 'Can change Token', 7, 'change_token'),
(27, 'Can delete Token', 7, 'delete_token'),
(28, 'Can view Token', 7, 'view_token'),
(29, 'Can add log entry', 8, 'add_logentry'),
(30, 'Can change log entry', 8, 'change_logentry'),
(31, 'Can delete log entry', 8, 'delete_logentry'),
(32, 'Can view log entry', 8, 'view_logentry'),
(33, 'Can add permission', 9, 'add_permission'),
(34, 'Can change permission', 9, 'change_permission'),
(35, 'Can delete permission', 9, 'delete_permission'),
(36, 'Can view permission', 9, 'view_permission'),
(37, 'Can add group', 10, 'add_group'),
(38, 'Can change group', 10, 'change_group'),
(39, 'Can delete group', 10, 'delete_group'),
(40, 'Can view group', 10, 'view_group'),
(41, 'Can add user', 11, 'add_user'),
(42, 'Can change user', 11, 'change_user'),
(43, 'Can delete user', 11, 'delete_user'),
(44, 'Can view user', 11, 'view_user'),
(45, 'Can add content type', 12, 'add_contenttype'),
(46, 'Can change content type', 12, 'change_contenttype'),
(47, 'Can delete content type', 12, 'delete_contenttype'),
(48, 'Can view content type', 12, 'view_contenttype'),
(49, 'Can add session', 13, 'add_session'),
(50, 'Can change session', 13, 'change_session'),
(51, 'Can delete session', 13, 'delete_session'),
(52, 'Can view session', 13, 'view_session');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$1dafda80000$JkfUpyjBlraU$pas1hB7N/6lVWX2i/B3fbx16++41y+lBfJRTlOP9cVE=', '2020-06-29 10:39:54.315280', 1, 'shakilahmmeed', '', '', 'shakilahmmeed@gmail.com', 1, 1, '2020-05-29 15:43:33.455579'),
(3, 'pbkdf2_sha256$180000dafsdfa$BrPE8aFh8JJy$2xUsNIjg5ZzzwjnmgI/JZhRM1SzXsoM+795aSfNGQlw=', NULL, 0, 'reduan413', 'Reduan', 'Ali', 'reduan15-11413@diu.edu.bd', 0, 1, '2020-05-30 08:17:04.185838'),
(4, 'pbkdf2_sha256$180000$MjtWAWbnd3LR$2dfasdfao8Lft9Lgkj+P9xG//+6UquKH60nKUiYwU+RovMr1Cg=', NULL, 0, 'nazmul', 'Nazmul', 'Haque', 'nazmul2018s@gmail.com', 0, 1, '2020-05-30 13:43:15.881298'),
(5, 'pbkdf2_sha256$180000$EoNNqztfasdfauXaNC$F4PjwzlwneBXWOqAGdHwTMcYh67zLlF2NYXV+Xub+d0=', NULL, 0, 'ra_rownok', 'Reshad Ahamed', 'Rownok', 'reshad15-10669@diu.edu.bd', 0, 1, '2020-05-30 15:30:02.529625'),
(6, 'pbkdf2_sha256$180000$h11GjHEcdffasfa96XE$ggeDaNpiJN8+t6hT4t0gTRiWBGWGPquZokE/FxUl7tc=', NULL, 0, 'shakilahmed6055', 'Shakil', 'Ahmed', 'shakilahmed6055@gmail.com', 0, 1, '2020-06-09 10:45:37.475737'),
(7, 'pbkdf2_sha256$180000$CifdfasfaVKEOX8GDVT$JJ2g3bow6ep6wfR46X8+4Ub7WRCSYjbYNT0oxhysDVY=', NULL, 0, 'iamnadim', 'Nadim', 'Mahamud', 'nadim15-9805@diu.edu.bd', 0, 1, '2020-06-09 12:19:56.424034'),
(8, 'pbkdf2_sha256$180000$gO6CWVPfasdfaNdt4l$f5Z0jCQnIqcmX0GmIILqBpVhUF1IVKLIzMQUCiHdtl8=', NULL, 0, 'samian01', 'sami', 'an', 'walid15-11698@diu.edu.bd', 0, 1, '2020-06-09 12:20:13.903884'),
(9, 'pbkdf2_sha256$180000$EJ8LdfasdfamG69EgoR$3bUBQSJrUDhtoyIgM8FXSzjO6tBI9DK7SUI9HK0W3Ik=', NULL, 1, 'erfanul007', 'Md', 'Erfanul', 'erfanul15-10777@diu.edu.bd', 1, 1, '2020-06-09 12:21:00.822081'),
(10, 'pbkdf2_sha256$180000$QIfdafsfCVNtk9OG$BzgOfHhjn19ZsqKC30vCceRDtF8doW1OoBlWZykM6NQ=dfas', NULL, 0, 'shudipta47', 'Shudipta', 'Das', 'shudipta15-11424@diu.edu.bd', 0, 1, '2020-06-09 12:21:38.028481'),
(11, 'pbkdf2_sha256$180000$OGZY5vdfasfhckqtS$wnEDnSgj8AmSFTvQwU2S50KYesDR/66J4JtCiNsi7nI=', NULL, 0, 's4k18', 'Md', 'Hello', 'sakibul15-11441@diu.edu.bd', 1, 1, '2020-06-09 12:21:45.334135'),
(12, 'pbkdf2_sha256$180000$4avsFdfasfa8tDCWlB$9s+LYlWbXfH0QevNH/wrtwiUM/6BfZsSWrMkLzi6fjQ=', NULL, 0, 'Robin', 'ROBIN', 'Mahmud', 'Sayed15-10738@diu.edu.bd', 0, 0, '2020-06-09 12:25:05.917740'),
(13, 'pbkdf2_sha256$180000$j8HIGYKjQQwF$fdafaHJiv/UMEJiAEw2JUavpiozvmq9b1BiPMBJTFjLKJTPs=', NULL, 0, 'shakil15-9376', 'Shakil', 'Ahmed', 'shakil15-9376@diu.edu.bd', 0, 1, '2020-06-09 12:25:12.244751'),
(14, 'pbkdf2_sha256$180000$e0xpibAMuGXe$BdfasdfacBaEYEN443lLjtKP3qBqLPal4OTaOt7FlwfyLo4gG0=', NULL, 0, 'Kaniz', 'Kaniz', 'Fatema', 'kaniz15-10742@diu.edu.bd', 0, 0, '2020-06-09 12:26:53.009124'),
(15, 'pbkdf2_sha256$180000$2EY8kBd7aZYdfasfx$jLSjiZjVhktv2VDF/TYTEKRANWAlMlnnv2VI0Fxh/DQ=', NULL, 0, 'littlewizard96', 'Little', 'Wizard', 'littlewizard96@gmail.com', 0, 1, '2020-06-09 12:26:53.437324'),
(17, 'pbkdf2_sha256$180000$4JOL7HV1Tzdfasfa5G$w0d7x+IeKwvvJ8Y1mdwvrH5lbIdRfgyhKGl8GA6wmVs=', NULL, 0, 'tahsin', 'Tahsin', 'Iftekhar', 'tahsiniftekhar@gmail.com', 0, 0, '2020-06-19 18:15:53.835045');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(8, 'admin', 'logentry'),
(2, 'adminpanel', 'practice'),
(3, 'adminpanel', 'subdomain'),
(1, 'adminpanel', 'track'),
(10, 'auth', 'group'),
(9, 'auth', 'permission'),
(11, 'auth', 'user'),
(7, 'authtoken', 'token'),
(12, 'contenttypes', 'contenttype'),
(13, 'sessions', 'session'),
(4, 'userpanel', 'education'),
(5, 'userpanel', 'profile'),
(6, 'userpanel', 'workexperience');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2020-05-29 15:42:21.649147'),
(2, 'auth', '0001_initial', '2020-05-29 15:42:22.023608'),
(3, 'admin', '0001_initial', '2020-05-29 15:42:23.288763'),
(4, 'admin', '0002_logentry_remove_auto_add', '2020-05-29 15:42:23.591811'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2020-05-29 15:42:23.607480'),
(6, 'adminpanel', '0001_initial', '2020-05-29 15:42:23.738022'),
(7, 'adminpanel', '0002_auto_20200417_1505', '2020-05-29 15:42:24.044098'),
(8, 'adminpanel', '0003_subdomain', '2020-05-29 15:42:24.111009'),
(9, 'adminpanel', '0004_auto_20200529_1202', '2020-05-29 15:42:24.265011'),
(10, 'contenttypes', '0002_remove_content_type_name', '2020-05-29 15:42:24.481870'),
(11, 'auth', '0002_alter_permission_name_max_length', '2020-05-29 15:42:24.510065'),
(12, 'auth', '0003_alter_user_email_max_length', '2020-05-29 15:42:24.544143'),
(13, 'auth', '0004_alter_user_username_opts', '2020-05-29 15:42:24.565239'),
(14, 'auth', '0005_alter_user_last_login_null', '2020-05-29 15:42:24.673658'),
(15, 'auth', '0006_require_contenttypes_0002', '2020-05-29 15:42:24.684615'),
(16, 'auth', '0007_alter_validators_add_error_messages', '2020-05-29 15:42:24.699923'),
(17, 'auth', '0008_alter_user_username_max_length', '2020-05-29 15:42:24.727540'),
(18, 'auth', '0009_alter_user_last_name_max_length', '2020-05-29 15:42:24.760018'),
(19, 'auth', '0010_alter_group_name_max_length', '2020-05-29 15:42:24.794095'),
(20, 'auth', '0011_update_proxy_permissions', '2020-05-29 15:42:24.815072'),
(21, 'authtoken', '0001_initial', '2020-05-29 15:42:24.881182'),
(22, 'authtoken', '0002_auto_20160226_1747', '2020-05-29 15:42:25.190440'),
(23, 'sessions', '0001_initial', '2020-05-29 15:42:25.253799'),
(24, 'userpanel', '0001_initial', '2020-05-29 15:42:25.368168'),
(25, 'userpanel', '0002_auto_20200421_0920', '2020-05-29 15:42:25.756415'),
(26, 'userpanel', '0003_auto_20200428_1230', '2020-05-29 15:42:26.381437'),
(27, 'userpanel', '0004_remove_profile_works_at', '2020-05-29 15:42:26.502030'),
(28, 'userpanel', '0005_auto_20200528_1214', '2020-05-29 15:42:26.865663'),
(29, 'userpanel', '0006_profile_email_verified', '2020-06-09 10:32:34.077120');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('83a06ehyyniihzr5rgam5fxhcou74nym', 'ZTU3NTJkNjQ2ZjVlMTMwYmE0ODYzZDhlY2IwM2U3YTBlZTU4ZDZmZTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIzNDcyODNiY2UwNDkxYTFiMTM0MWVhMWI0ZWU5MmFlMGMwYmM0YmEyIn0=', '2020-06-12 15:46:16.093824'),
('dq33zf6llw59b94ukftcu1xxvyb1a52h', 'ZTU3NTJkNjQ2ZjVlMTMwYmE0ODYzZDhlY2IwM2U3YTBlZTU4ZDZmZTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIzNDcyODNiY2UwNDkxYTFiMTM0MWVhMWI0ZWU5MmFlMGMwYmM0YmEyIn0=', '2020-07-06 12:42:29.932521'),
('jykuolv19goe9nuc8gm7ufja5m0xzqzz', 'ZTU3NTJkNjQ2ZjVlMTMwYmE0ODYzZDhlY2IwM2U3YTBlZTU4ZDZmZTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIzNDcyODNiY2UwNDkxYTFiMTM0MWVhMWI0ZWU5MmFlMGMwYmM0YmEyIn0=', '2020-06-17 18:15:33.465995'),
('k7fnptf2tqszwslgzu97oecua8fmbci3', 'ZTU3NTJkNjQ2ZjVlMTMwYmE0ODYzZDhlY2IwM2U3YTBlZTU4ZDZmZTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIzNDcyODNiY2UwNDkxYTFiMTM0MWVhMWI0ZWU5MmFlMGMwYmM0YmEyIn0=', '2020-07-13 10:39:54.416283'),
('oxz6d0upwoba3l2jo7j2x08tbn65lbom', 'ZTU3NTJkNjQ2ZjVlMTMwYmE0ODYzZDhlY2IwM2U3YTBlZTU4ZDZmZTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIzNDcyODNiY2UwNDkxYTFiMTM0MWVhMWI0ZWU5MmFlMGMwYmM0YmEyIn0=', '2020-07-03 05:02:45.029275');

-- --------------------------------------------------------

--
-- Table structure for table `userpanel_education`
--

CREATE TABLE `userpanel_education` (
  `id` int(11) NOT NULL,
  `subject` longtext NOT NULL,
  `institution` longtext NOT NULL,
  `started_at` date NOT NULL,
  `end_date` date NOT NULL,
  `profile_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userpanel_education`
--

INSERT INTO `userpanel_education` (`id`, `subject`, `institution`, `started_at`, `end_date`, `profile_id`) VALUES
(2, 'B.Sc in CSE', 'Daffodil International University', '2017-12-04', '2022-11-12', 4),
(3, 'Bsc. in CSE', 'Daffodil International University', '2017-04-01', '2021-07-01', 6);

-- --------------------------------------------------------

--
-- Table structure for table `userpanel_profile`
--

CREATE TABLE `userpanel_profile` (
  `id` int(11) NOT NULL,
  `location` varchar(300) DEFAULT NULL,
  `contact` varchar(200) DEFAULT NULL,
  `website` varchar(300) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `email_verified` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userpanel_profile`
--

INSERT INTO `userpanel_profile` (`id`, `location`, `contact`, `website`, `user_id`, `email_verified`) VALUES
(2, NULL, NULL, NULL, 3, 0),
(3, NULL, NULL, NULL, 4, 0),
(4, 'Narayanganj', 'reshadahamedr001@gmail.com', 'https://www.facebook.com/rownok46', 5, 0),
(5, 'Dhaka', NULL, NULL, 6, 0),
(6, 'Dhaka,Bangladesh', 'nadim15-9805@diu.edu.bd', NULL, 7, 0),
(7, NULL, NULL, NULL, 8, 0),
(8, NULL, NULL, NULL, 9, 0),
(9, NULL, NULL, NULL, 10, 0),
(10, NULL, NULL, NULL, 11, 0),
(11, NULL, NULL, NULL, 12, 0),
(12, NULL, NULL, NULL, 13, 0),
(13, NULL, NULL, NULL, 14, 0),
(14, NULL, NULL, NULL, 15, 0),
(16, NULL, NULL, NULL, 17, 0);

-- --------------------------------------------------------

--
-- Table structure for table `userpanel_workexperience`
--

CREATE TABLE `userpanel_workexperience` (
  `id` int(11) NOT NULL,
  `position` longtext NOT NULL,
  `company` longtext NOT NULL,
  `started_at` date NOT NULL,
  `end_date` date NOT NULL,
  `profile_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminpanel_practice`
--
ALTER TABLE `adminpanel_practice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `adminpanel_challenge_author_id_c1e1f6e5_fk_auth_user_id` (`author_id`),
  ADD KEY `adminpanel_challenge_track_id_4f4dd7a5_fk_adminpanel_track_id` (`track_id`);

--
-- Indexes for table `adminpanel_subdomain`
--
ALTER TABLE `adminpanel_subdomain`
  ADD PRIMARY KEY (`id`),
  ADD KEY `adminpanel_subdomain_track_id_d14fbd2b_fk_adminpanel_track_id` (`track_id`);

--
-- Indexes for table `adminpanel_track`
--
ALTER TABLE `adminpanel_track`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `authtoken_token`
--
ALTER TABLE `authtoken_token`
  ADD PRIMARY KEY (`key`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `userpanel_education`
--
ALTER TABLE `userpanel_education`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userpanel_education_profile_id_6782d40e_fk_userpanel_profile_id` (`profile_id`);

--
-- Indexes for table `userpanel_profile`
--
ALTER TABLE `userpanel_profile`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `userpanel_workexperience`
--
ALTER TABLE `userpanel_workexperience`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userpanel_workexperi_profile_id_2e20eed7_fk_userpanel` (`profile_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminpanel_practice`
--
ALTER TABLE `adminpanel_practice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `adminpanel_subdomain`
--
ALTER TABLE `adminpanel_subdomain`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `adminpanel_track`
--
ALTER TABLE `adminpanel_track`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `userpanel_education`
--
ALTER TABLE `userpanel_education`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `userpanel_profile`
--
ALTER TABLE `userpanel_profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `userpanel_workexperience`
--
ALTER TABLE `userpanel_workexperience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `adminpanel_practice`
--
ALTER TABLE `adminpanel_practice`
  ADD CONSTRAINT `adminpanel_challenge_track_id_4f4dd7a5_fk_adminpanel_track_id` FOREIGN KEY (`track_id`) REFERENCES `adminpanel_track` (`id`);

--
-- Constraints for table `adminpanel_subdomain`
--
ALTER TABLE `adminpanel_subdomain`
  ADD CONSTRAINT `adminpanel_subdomain_track_id_d14fbd2b_fk_adminpanel_track_id` FOREIGN KEY (`track_id`) REFERENCES `adminpanel_track` (`id`);

--
-- Constraints for table `authtoken_token`
--
ALTER TABLE `authtoken_token`
  ADD CONSTRAINT `authtoken_token_user_id_35299eff_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `userpanel_education`
--
ALTER TABLE `userpanel_education`
  ADD CONSTRAINT `userpanel_education_profile_id_6782d40e_fk_userpanel_profile_id` FOREIGN KEY (`profile_id`) REFERENCES `userpanel_profile` (`id`);

--
-- Constraints for table `userpanel_profile`
--
ALTER TABLE `userpanel_profile`
  ADD CONSTRAINT `userpanel_profile_user_id_652830da_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `userpanel_workexperience`
--
ALTER TABLE `userpanel_workexperience`
  ADD CONSTRAINT `userpanel_workexperi_profile_id_2e20eed7_fk_userpanel` FOREIGN KEY (`profile_id`) REFERENCES `userpanel_profile` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
