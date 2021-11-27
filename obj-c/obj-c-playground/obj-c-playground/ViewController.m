//
//  ViewController.m
//  obj-c-playground
//
//  Created by Arfan Fudyartanto on 27/11/21.
//  Copyright © 2021 Arfan Fudyartanto. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@property (weak, nonatomic) IBOutlet UIWebView *webview;
@property (weak, nonatomic) IBOutlet UITextField *accessTokenTextField;
@property (weak, nonatomic) IBOutlet UIButton *reloadButton;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    [self.accessTokenTextField setText:@"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2Mzc5OTk3OTUsImV4cCI6MTY2OTUzNTc5NSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.Rz_fhFXdZ5h1SAW0aEGnxCj9OANACbCXah5W3Cj4tmc"];
}

- (void)loadWebView {
    NSString *uniqueIdentifier = [[[UIDevice currentDevice] identifierForVendor] UUIDString];
    
    NSURL *url = [NSURL URLWithString:@"http://192.168.0.152:3000/bridge"];
    NSMutableURLRequest *requestObj = [NSMutableURLRequest requestWithURL:url];
    NSString *accessToken = [self.accessTokenTextField text];
    [requestObj setValue:accessToken forHTTPHeaderField:@"session_access_token"];
    
    [self.webview stringByEvaluatingJavaScriptFromString:[NSString stringWithFormat:@"window.app = {deviceId: '%@', username: 'john@dow.com'}", uniqueIdentifier]];
    [self.webview loadRequest:requestObj];
}

- (IBAction)onClickReload:(id)sender {
    [self loadWebView];
}

@end
