/* Actual deterministic program outputs. Replay only, no model calls. */
window.WIFI_FRONTEND_DATA={
  "cases": [
    {
      "id": "W01",
      "title": "位置调查样本01",
      "incident": "室外网页打不开，回楼内恢复，请调查。",
      "snapshots": {
        "indoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:00:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-IN",
          "rssi_dbm": -48,
          "ip": "10.1.2.20",
          "prefix": 24,
          "gateway": "10.1.2.1",
          "dns": [
            "10.1.0.53"
          ],
          "auth": "complete",
          "checks": {
            "gateway": [
              true,
              true,
              true
            ],
            "https": [
              true,
              true,
              true
            ],
            "dns": [
              true,
              true,
              true
            ],
            "icmp": [
              true,
              true,
              true
            ]
          }
        },
        "outdoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:01:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-OUT",
          "rssi_dbm": -65,
          "ip": "10.1.2.20",
          "prefix": 24,
          "gateway": "10.1.2.1",
          "dns": [
            "10.1.0.53"
          ],
          "auth": "complete",
          "checks": {
            "gateway": [
              true,
              true,
              true
            ],
            "https": [
              true,
              true,
              true
            ],
            "dns": [
              false,
              false,
              false
            ],
            "icmp": [
              true,
              true,
              true
            ]
          }
        }
      }
    },
    {
      "id": "W02",
      "title": "位置调查样本02",
      "incident": "手机已连接校园WiFi但应用无响应。",
      "snapshots": {
        "indoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:00:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-IN",
          "rssi_dbm": -48,
          "ip": "10.1.2.20",
          "prefix": 24,
          "gateway": "10.1.2.1",
          "dns": [
            "10.1.0.53"
          ],
          "auth": "complete",
          "checks": {
            "gateway": [
              true,
              true,
              true
            ],
            "https": [
              true,
              true,
              true
            ],
            "dns": [
              true,
              true,
              true
            ],
            "icmp": [
              true,
              true,
              true
            ]
          }
        },
        "outdoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:01:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-OUT",
          "rssi_dbm": -65,
          "ip": "169.254.12.3",
          "prefix": 24,
          "gateway": null,
          "dns": [
            "10.1.0.53"
          ],
          "auth": "complete",
          "checks": {
            "gateway": [
              false,
              false,
              null
            ],
            "https": [
              false,
              false,
              null
            ],
            "dns": [
              false,
              false,
              null
            ],
            "icmp": [
              false,
              false,
              null
            ]
          }
        }
      }
    },
    {
      "id": "W03",
      "title": "位置调查样本03",
      "incident": "连接后浏览器出现登录提示，其他应用无响应。",
      "snapshots": {
        "indoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:00:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-IN",
          "rssi_dbm": -48,
          "ip": "10.1.2.20",
          "prefix": 24,
          "gateway": "10.1.2.1",
          "dns": [
            "10.1.0.53"
          ],
          "auth": "complete",
          "checks": {
            "gateway": [
              true,
              true,
              true
            ],
            "https": [
              true,
              true,
              true
            ],
            "dns": [
              true,
              true,
              true
            ],
            "icmp": [
              true,
              true,
              true
            ]
          }
        },
        "outdoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:01:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-OUT",
          "rssi_dbm": -65,
          "ip": "10.1.2.20",
          "prefix": 24,
          "gateway": "10.1.2.1",
          "dns": [
            "10.1.0.53"
          ],
          "auth": "required",
          "checks": {
            "gateway": [
              true,
              true,
              true
            ],
            "https": [
              false,
              false,
              false
            ],
            "dns": [
              true,
              true,
              true
            ],
            "icmp": [
              true,
              true,
              true
            ]
          }
        }
      }
    },
    {
      "id": "W04",
      "title": "位置调查样本04",
      "incident": "门外网络不稳定，连接图标仍在。",
      "snapshots": {
        "indoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:00:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-IN",
          "rssi_dbm": -48,
          "ip": "10.1.2.20",
          "prefix": 24,
          "gateway": "10.1.2.1",
          "dns": [
            "10.1.0.53"
          ],
          "auth": "complete",
          "checks": {
            "gateway": [
              true,
              true,
              true
            ],
            "https": [
              true,
              true,
              true
            ],
            "dns": [
              true,
              true,
              true
            ],
            "icmp": [
              true,
              true,
              true
            ]
          }
        },
        "outdoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:01:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-OUT",
          "rssi_dbm": -86,
          "ip": "10.1.2.20",
          "prefix": 24,
          "gateway": "10.1.2.1",
          "dns": [
            "10.1.0.53"
          ],
          "auth": "complete",
          "checks": {
            "gateway": [
              false,
              true,
              false
            ],
            "https": [
              false,
              false,
              true
            ],
            "dns": [
              null,
              null
            ],
            "icmp": [
              false,
              true,
              false
            ]
          }
        }
      }
    },
    {
      "id": "W05",
      "title": "位置调查样本05",
      "incident": "采集程序只返回了部分记录，请判断。",
      "snapshots": {
        "indoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:00:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-IN",
          "rssi_dbm": -48,
          "ip": "10.1.2.20",
          "prefix": 24,
          "gateway": "10.1.2.1",
          "dns": [
            "10.1.0.53"
          ],
          "auth": "complete",
          "checks": {
            "gateway": [
              true,
              true,
              true
            ],
            "https": [
              true,
              true,
              true
            ],
            "dns": [
              true,
              true,
              true
            ],
            "icmp": [
              true,
              true,
              true
            ]
          }
        },
        "outdoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:01:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-OUT",
          "rssi_dbm": null,
          "ip": null,
          "prefix": null,
          "gateway": null,
          "dns": [
            "10.1.0.53"
          ],
          "auth": null,
          "checks": {}
        }
      }
    },
    {
      "id": "W06",
      "title": "位置调查样本06",
      "incident": "监控记录与用户现象不一致，请检查。",
      "snapshots": {
        "indoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:00:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-IN",
          "rssi_dbm": -48,
          "ip": "10.1.2.20",
          "prefix": 24,
          "gateway": "10.1.2.1",
          "dns": [
            "10.1.0.53"
          ],
          "auth": "complete",
          "checks": {
            "gateway": [
              true,
              true,
              true
            ],
            "https": [
              true,
              true,
              true
            ],
            "dns": [
              true,
              true,
              true
            ],
            "icmp": [
              true,
              true,
              true
            ]
          }
        },
        "outdoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:01:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-OUT",
          "rssi_dbm": -65,
          "ip": "10.1.2.20",
          "prefix": 24,
          "gateway": "10.1.2.1",
          "dns": [
            "10.1.0.53"
          ],
          "auth": "required",
          "checks": {
            "gateway": [
              false,
              false,
              false
            ],
            "https": [
              true,
              true,
              true
            ],
            "dns": [
              true,
              true,
              true
            ],
            "icmp": [
              true,
              true,
              true
            ]
          }
        }
      }
    },
    {
      "id": "W07",
      "title": "位置调查样本07",
      "incident": "从楼内移到门口后接入点发生变化，请巡检。",
      "snapshots": {
        "indoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:00:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-IN",
          "rssi_dbm": -48,
          "ip": "10.1.2.20",
          "prefix": 24,
          "gateway": "10.1.2.1",
          "dns": [
            "10.1.0.53"
          ],
          "auth": "complete",
          "checks": {
            "gateway": [
              true,
              true,
              true
            ],
            "https": [
              true,
              true,
              true
            ],
            "dns": [
              true,
              true,
              true
            ],
            "icmp": [
              true,
              true,
              true
            ]
          }
        },
        "outdoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:01:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-OUT",
          "rssi_dbm": -65,
          "ip": "10.1.2.20",
          "prefix": 24,
          "gateway": "10.1.2.1",
          "dns": [
            "10.1.0.53"
          ],
          "auth": "complete",
          "checks": {
            "gateway": [
              true,
              true,
              true
            ],
            "https": [
              true,
              true,
              true
            ],
            "dns": [
              true,
              true,
              true
            ],
            "icmp": [
              true,
              true,
              true
            ]
          }
        }
      }
    },
    {
      "id": "W08",
      "title": "位置调查样本08",
      "incident": "诊断软件提示ping失败，但浏览器可以访问测试站。",
      "snapshots": {
        "indoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:00:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-IN",
          "rssi_dbm": -48,
          "ip": "10.1.2.20",
          "prefix": 24,
          "gateway": "10.1.2.1",
          "dns": [
            "10.1.0.53"
          ],
          "auth": "complete",
          "checks": {
            "gateway": [
              true,
              true,
              true
            ],
            "https": [
              true,
              true,
              true
            ],
            "dns": [
              true,
              true,
              true
            ],
            "icmp": [
              true,
              true,
              true
            ]
          }
        },
        "outdoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:01:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-OUT",
          "rssi_dbm": -65,
          "ip": "10.1.2.20",
          "prefix": 24,
          "gateway": "10.1.2.1",
          "dns": [
            "10.1.0.53"
          ],
          "auth": "complete",
          "checks": {
            "gateway": [
              true,
              true,
              true
            ],
            "https": [
              true,
              true,
              true
            ],
            "dns": [
              true,
              true,
              true
            ],
            "icmp": [
              false,
              false,
              false
            ]
          }
        }
      }
    },
    {
      "id": "W09",
      "title": "位置调查样本09",
      "incident": "故障切换后网络多项异常，请调查。",
      "snapshots": {
        "indoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:00:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-IN",
          "rssi_dbm": -48,
          "ip": "10.1.2.20",
          "prefix": 24,
          "gateway": "10.1.2.1",
          "dns": [
            "10.1.0.53"
          ],
          "auth": "complete",
          "checks": {
            "gateway": [
              true,
              true,
              true
            ],
            "https": [
              true,
              true,
              true
            ],
            "dns": [
              true,
              true,
              true
            ],
            "icmp": [
              true,
              true,
              true
            ]
          }
        },
        "outdoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:01:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-OUT",
          "rssi_dbm": -65,
          "ip": "10.1.2.20",
          "prefix": 24,
          "gateway": "10.1.2.1",
          "dns": [
            "10.1.0.53"
          ],
          "auth": "required",
          "checks": {
            "gateway": [
              true,
              true,
              true
            ],
            "https": [
              false,
              false,
              false
            ],
            "dns": [
              false,
              false,
              false
            ],
            "icmp": [
              true,
              true,
              true
            ]
          }
        }
      }
    },
    {
      "id": "W10",
      "title": "位置调查样本10",
      "incident": "两次不同位置的记录表现不同，请判断是否位置导致。",
      "snapshots": {
        "indoor": {
          "device_id": "phone-A",
          "time": "2026-11-04T09:00:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-IN",
          "rssi_dbm": -48,
          "ip": "10.1.2.20",
          "prefix": 24,
          "gateway": "10.1.2.1",
          "dns": [
            "10.1.0.53"
          ],
          "auth": "complete",
          "checks": {
            "gateway": [
              true,
              true,
              true
            ],
            "https": [
              true,
              true,
              true
            ],
            "dns": [
              true,
              true,
              true
            ],
            "icmp": [
              true,
              true,
              true
            ]
          }
        },
        "outdoor": {
          "device_id": "phone-B",
          "time": "2026-11-04T12:00:00+08:00",
          "ssid": "Campus",
          "bssid": "AP-OUT",
          "rssi_dbm": -65,
          "ip": "10.1.2.20",
          "prefix": 24,
          "gateway": "10.1.2.1",
          "dns": [
            "10.1.0.53"
          ],
          "auth": "complete",
          "checks": {
            "gateway": [
              true,
              true,
              true
            ],
            "https": [
              false,
              false,
              false
            ],
            "dns": [
              true,
              true,
              true
            ],
            "icmp": [
              true,
              true,
              true
            ]
          }
        }
      }
    }
  ],
  "traces": [
    {
      "status": "completed",
      "backend": "deterministic_demo",
      "case_id": "W01",
      "group": "C",
      "hypotheses": [
        "地址配置异常",
        "DNS异常",
        "认证未完成",
        "无线或接入点异常",
        "上游或策略限制"
      ],
      "calls": [
        {
          "id": "call_1",
          "name": "get_snapshot",
          "arguments": {
            "case_id": "W01"
          },
          "output": {
            "ok": true,
            "result": {
              "synthetic": true,
              "case_id": "W01",
              "location": "outdoor",
              "snapshot": {
                "device_id": "phone-A",
                "time": "2026-11-04T09:01:00+08:00",
                "ssid": "Campus",
                "bssid": "AP-OUT",
                "rssi_dbm": -65,
                "ip": "10.1.2.20",
                "prefix": 24,
                "gateway": "10.1.2.1",
                "dns": [
                  "10.1.0.53"
                ],
                "auth": "complete",
                "checks": {
                  "gateway": [
                    true,
                    true,
                    true
                  ],
                  "https": [
                    true,
                    true,
                    true
                  ],
                  "dns": [
                    false,
                    false,
                    false
                  ],
                  "icmp": [
                    true,
                    true,
                    true
                  ]
                }
              }
            }
          }
        },
        {
          "id": "call_2",
          "name": "check_ip_config",
          "arguments": {
            "case_id": "W01"
          },
          "output": {
            "ok": true,
            "result": {
              "format_valid": true,
              "usable": true,
              "same_subnet": true,
              "issues": [],
              "address_class": "private"
            }
          }
        },
        {
          "id": "call_3",
          "name": "analyze_connectivity",
          "arguments": {
            "case_id": "W01"
          },
          "output": {
            "ok": true,
            "result": {
              "stats": {
                "gateway": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                },
                "https": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                },
                "dns": {
                  "successes": 0,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 0.0,
                  "valid_ratio": 1.0
                },
                "icmp": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                }
              },
              "auth": "complete",
              "conflicts": [],
              "limitation": "Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage."
            }
          }
        },
        {
          "id": "call_4",
          "name": "compare_snapshots",
          "arguments": {
            "case_id": "W01"
          },
          "output": {
            "ok": true,
            "result": {
              "same_device": true,
              "seconds_apart": 60.0,
              "comparable": true,
              "changes": {
                "bssid": {
                  "indoor": "AP-IN",
                  "outdoor": "AP-OUT"
                },
                "rssi_dbm": {
                  "indoor": -48,
                  "outdoor": -65
                }
              },
              "limitations": [
                "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
              ]
            }
          }
        }
      ],
      "rounds": [],
      "skill_sha256": "fb90e5eaa4afe49700c913ef712245fa867302eff1f7accd498a43f3d6271c47",
      "question": "室外网页打不开，回楼内恢复，请调查。",
      "conclusion": {
        "assessment": "离线规则演示的暂定判断：dns",
        "label": "dns",
        "evidence": [
          {
            "claim": "地址检查结果：{\"format_valid\": true, \"usable\": true, \"same_subnet\": true, \"issues\": [], \"address_class\": \"private\"}",
            "source_ids": [
              "call_2"
            ]
          },
          {
            "claim": "分层检查统计：{\"stats\": {\"gateway\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}, \"https\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}, \"dns\": {\"successes\": 0, \"valid\": 3, \"total\": 3, \"success_ratio\": 0.0, \"valid_ratio\": 1.0}, \"icmp\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}}, \"auth\": \"complete\", \"conflicts\": [], \"limitation\": \"Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage.\"}",
            "source_ids": [
              "call_3"
            ]
          },
          {
            "claim": "对照限制：{\"same_device\": true, \"seconds_apart\": 60.0, \"comparable\": true, \"changes\": {\"bssid\": {\"indoor\": \"AP-IN\", \"outdoor\": \"AP-OUT\"}, \"rssi_dbm\": {\"indoor\": -48, \"outdoor\": -65}}, \"limitations\": [\"BSSID change alone does not prove roaming failure; signal alone cannot prove interference.\"]}",
            "source_ids": [
              "call_4"
            ]
          }
        ],
        "counterevidence": [
          "BSSID变化和单次ICMP失败均不能证明根因；HTTPS成功只覆盖测试目标。"
        ],
        "limitations": [
          "规则演示没有调用LLM，不能作为ABC模型实验。",
          "所有输入是模拟数据，不能定位真实楼门口根因。",
          "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
        ],
        "recommendations": [
          "补采同设备相近时段的地址、认证和多目标检查，再由工程师核验。"
        ]
      },
      "elapsed_seconds": 0.002658800000062911,
      "presentation": "sample_replay"
    },
    {
      "status": "completed",
      "backend": "deterministic_demo",
      "case_id": "W02",
      "group": "C",
      "hypotheses": [
        "地址配置异常",
        "DNS异常",
        "认证未完成",
        "无线或接入点异常",
        "上游或策略限制"
      ],
      "calls": [
        {
          "id": "call_1",
          "name": "get_snapshot",
          "arguments": {
            "case_id": "W02"
          },
          "output": {
            "ok": true,
            "result": {
              "synthetic": true,
              "case_id": "W02",
              "location": "outdoor",
              "snapshot": {
                "device_id": "phone-A",
                "time": "2026-11-04T09:01:00+08:00",
                "ssid": "Campus",
                "bssid": "AP-OUT",
                "rssi_dbm": -65,
                "ip": "169.254.12.3",
                "prefix": 24,
                "gateway": null,
                "dns": [
                  "10.1.0.53"
                ],
                "auth": "complete",
                "checks": {
                  "gateway": [
                    false,
                    false,
                    null
                  ],
                  "https": [
                    false,
                    false,
                    null
                  ],
                  "dns": [
                    false,
                    false,
                    null
                  ],
                  "icmp": [
                    false,
                    false,
                    null
                  ]
                }
              }
            }
          }
        },
        {
          "id": "call_2",
          "name": "check_ip_config",
          "arguments": {
            "case_id": "W02"
          },
          "output": {
            "ok": true,
            "result": {
              "format_valid": true,
              "usable": false,
              "same_subnet": null,
              "issues": [
                "Address unsuitable for ordinary campus Internet access",
                "Missing gateway"
              ],
              "address_class": "link_local"
            }
          }
        },
        {
          "id": "call_3",
          "name": "analyze_connectivity",
          "arguments": {
            "case_id": "W02"
          },
          "output": {
            "ok": true,
            "result": {
              "stats": {
                "gateway": {
                  "successes": 0,
                  "valid": 2,
                  "total": 3,
                  "success_ratio": 0.0,
                  "valid_ratio": 0.6666666666666666
                },
                "https": {
                  "successes": 0,
                  "valid": 2,
                  "total": 3,
                  "success_ratio": 0.0,
                  "valid_ratio": 0.6666666666666666
                },
                "dns": {
                  "successes": 0,
                  "valid": 2,
                  "total": 3,
                  "success_ratio": 0.0,
                  "valid_ratio": 0.6666666666666666
                },
                "icmp": {
                  "successes": 0,
                  "valid": 2,
                  "total": 3,
                  "success_ratio": 0.0,
                  "valid_ratio": 0.6666666666666666
                }
              },
              "auth": "complete",
              "conflicts": [
                "gateway: invalid/missing samples are not failures",
                "https: invalid/missing samples are not failures",
                "dns: invalid/missing samples are not failures",
                "icmp: invalid/missing samples are not failures"
              ],
              "limitation": "Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage."
            }
          }
        },
        {
          "id": "call_4",
          "name": "compare_snapshots",
          "arguments": {
            "case_id": "W02"
          },
          "output": {
            "ok": true,
            "result": {
              "same_device": true,
              "seconds_apart": 60.0,
              "comparable": true,
              "changes": {
                "bssid": {
                  "indoor": "AP-IN",
                  "outdoor": "AP-OUT"
                },
                "rssi_dbm": {
                  "indoor": -48,
                  "outdoor": -65
                },
                "ip": {
                  "indoor": "10.1.2.20",
                  "outdoor": "169.254.12.3"
                },
                "gateway": {
                  "indoor": "10.1.2.1",
                  "outdoor": null
                }
              },
              "limitations": [
                "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
              ]
            }
          }
        }
      ],
      "rounds": [],
      "skill_sha256": "fb90e5eaa4afe49700c913ef712245fa867302eff1f7accd498a43f3d6271c47",
      "question": "手机已连接校园WiFi但应用无响应。",
      "conclusion": {
        "assessment": "离线规则演示的暂定判断：conflicting",
        "label": "conflicting",
        "evidence": [
          {
            "claim": "地址检查结果：{\"format_valid\": true, \"usable\": false, \"same_subnet\": null, \"issues\": [\"Address unsuitable for ordinary campus Internet access\", \"Missing gateway\"], \"address_class\": \"link_local\"}",
            "source_ids": [
              "call_2"
            ]
          },
          {
            "claim": "分层检查统计：{\"stats\": {\"gateway\": {\"successes\": 0, \"valid\": 2, \"total\": 3, \"success_ratio\": 0.0, \"valid_ratio\": 0.6666666666666666}, \"https\": {\"successes\": 0, \"valid\": 2, \"total\": 3, \"success_ratio\": 0.0, \"valid_ratio\": 0.6666666666666666}, \"dns\": {\"successes\": 0, \"valid\": 2, \"total\": 3, \"success_ratio\": 0.0, \"valid_ratio\": 0.6666666666666666}, \"icmp\": {\"successes\": 0, \"valid\": 2, \"total\": 3, \"success_ratio\": 0.0, \"valid_ratio\": 0.6666666666666666}}, \"auth\": \"complete\", \"conflicts\": [\"gateway: invalid/missing samples are not failures\", \"https: invalid/missing samples are not failures\", \"dns: invalid/missing samples are not failures\", \"icmp: invalid/missing samples are not failures\"], \"limitation\": \"Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage.\"}",
            "source_ids": [
              "call_3"
            ]
          },
          {
            "claim": "对照限制：{\"same_device\": true, \"seconds_apart\": 60.0, \"comparable\": true, \"changes\": {\"bssid\": {\"indoor\": \"AP-IN\", \"outdoor\": \"AP-OUT\"}, \"rssi_dbm\": {\"indoor\": -48, \"outdoor\": -65}, \"ip\": {\"indoor\": \"10.1.2.20\", \"outdoor\": \"169.254.12.3\"}, \"gateway\": {\"indoor\": \"10.1.2.1\", \"outdoor\": null}}, \"limitations\": [\"BSSID change alone does not prove roaming failure; signal alone cannot prove interference.\"]}",
            "source_ids": [
              "call_4"
            ]
          }
        ],
        "counterevidence": [
          "BSSID变化和单次ICMP失败均不能证明根因；HTTPS成功只覆盖测试目标。"
        ],
        "limitations": [
          "规则演示没有调用LLM，不能作为ABC模型实验。",
          "所有输入是模拟数据，不能定位真实楼门口根因。",
          "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
        ],
        "recommendations": [
          "补采同设备相近时段的地址、认证和多目标检查，再由工程师核验。"
        ]
      },
      "elapsed_seconds": 0.002657900000031077,
      "presentation": "sample_replay"
    },
    {
      "status": "completed",
      "backend": "deterministic_demo",
      "case_id": "W03",
      "group": "C",
      "hypotheses": [
        "地址配置异常",
        "DNS异常",
        "认证未完成",
        "无线或接入点异常",
        "上游或策略限制"
      ],
      "calls": [
        {
          "id": "call_1",
          "name": "get_snapshot",
          "arguments": {
            "case_id": "W03"
          },
          "output": {
            "ok": true,
            "result": {
              "synthetic": true,
              "case_id": "W03",
              "location": "outdoor",
              "snapshot": {
                "device_id": "phone-A",
                "time": "2026-11-04T09:01:00+08:00",
                "ssid": "Campus",
                "bssid": "AP-OUT",
                "rssi_dbm": -65,
                "ip": "10.1.2.20",
                "prefix": 24,
                "gateway": "10.1.2.1",
                "dns": [
                  "10.1.0.53"
                ],
                "auth": "required",
                "checks": {
                  "gateway": [
                    true,
                    true,
                    true
                  ],
                  "https": [
                    false,
                    false,
                    false
                  ],
                  "dns": [
                    true,
                    true,
                    true
                  ],
                  "icmp": [
                    true,
                    true,
                    true
                  ]
                }
              }
            }
          }
        },
        {
          "id": "call_2",
          "name": "check_ip_config",
          "arguments": {
            "case_id": "W03"
          },
          "output": {
            "ok": true,
            "result": {
              "format_valid": true,
              "usable": true,
              "same_subnet": true,
              "issues": [],
              "address_class": "private"
            }
          }
        },
        {
          "id": "call_3",
          "name": "analyze_connectivity",
          "arguments": {
            "case_id": "W03"
          },
          "output": {
            "ok": true,
            "result": {
              "stats": {
                "gateway": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                },
                "https": {
                  "successes": 0,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 0.0,
                  "valid_ratio": 1.0
                },
                "dns": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                },
                "icmp": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                }
              },
              "auth": "required",
              "conflicts": [],
              "limitation": "Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage."
            }
          }
        },
        {
          "id": "call_4",
          "name": "compare_snapshots",
          "arguments": {
            "case_id": "W03"
          },
          "output": {
            "ok": true,
            "result": {
              "same_device": true,
              "seconds_apart": 60.0,
              "comparable": true,
              "changes": {
                "bssid": {
                  "indoor": "AP-IN",
                  "outdoor": "AP-OUT"
                },
                "rssi_dbm": {
                  "indoor": -48,
                  "outdoor": -65
                },
                "auth": {
                  "indoor": "complete",
                  "outdoor": "required"
                }
              },
              "limitations": [
                "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
              ]
            }
          }
        }
      ],
      "rounds": [],
      "skill_sha256": "fb90e5eaa4afe49700c913ef712245fa867302eff1f7accd498a43f3d6271c47",
      "question": "连接后浏览器出现登录提示，其他应用无响应。",
      "conclusion": {
        "assessment": "离线规则演示的暂定判断：authentication",
        "label": "authentication",
        "evidence": [
          {
            "claim": "地址检查结果：{\"format_valid\": true, \"usable\": true, \"same_subnet\": true, \"issues\": [], \"address_class\": \"private\"}",
            "source_ids": [
              "call_2"
            ]
          },
          {
            "claim": "分层检查统计：{\"stats\": {\"gateway\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}, \"https\": {\"successes\": 0, \"valid\": 3, \"total\": 3, \"success_ratio\": 0.0, \"valid_ratio\": 1.0}, \"dns\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}, \"icmp\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}}, \"auth\": \"required\", \"conflicts\": [], \"limitation\": \"Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage.\"}",
            "source_ids": [
              "call_3"
            ]
          },
          {
            "claim": "对照限制：{\"same_device\": true, \"seconds_apart\": 60.0, \"comparable\": true, \"changes\": {\"bssid\": {\"indoor\": \"AP-IN\", \"outdoor\": \"AP-OUT\"}, \"rssi_dbm\": {\"indoor\": -48, \"outdoor\": -65}, \"auth\": {\"indoor\": \"complete\", \"outdoor\": \"required\"}}, \"limitations\": [\"BSSID change alone does not prove roaming failure; signal alone cannot prove interference.\"]}",
            "source_ids": [
              "call_4"
            ]
          }
        ],
        "counterevidence": [
          "BSSID变化和单次ICMP失败均不能证明根因；HTTPS成功只覆盖测试目标。"
        ],
        "limitations": [
          "规则演示没有调用LLM，不能作为ABC模型实验。",
          "所有输入是模拟数据，不能定位真实楼门口根因。",
          "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
        ],
        "recommendations": [
          "补采同设备相近时段的地址、认证和多目标检查，再由工程师核验。"
        ]
      },
      "elapsed_seconds": 0.0019246000001658103,
      "presentation": "sample_replay"
    },
    {
      "status": "completed",
      "backend": "deterministic_demo",
      "case_id": "W04",
      "group": "C",
      "hypotheses": [
        "地址配置异常",
        "DNS异常",
        "认证未完成",
        "无线或接入点异常",
        "上游或策略限制"
      ],
      "calls": [
        {
          "id": "call_1",
          "name": "get_snapshot",
          "arguments": {
            "case_id": "W04"
          },
          "output": {
            "ok": true,
            "result": {
              "synthetic": true,
              "case_id": "W04",
              "location": "outdoor",
              "snapshot": {
                "device_id": "phone-A",
                "time": "2026-11-04T09:01:00+08:00",
                "ssid": "Campus",
                "bssid": "AP-OUT",
                "rssi_dbm": -86,
                "ip": "10.1.2.20",
                "prefix": 24,
                "gateway": "10.1.2.1",
                "dns": [
                  "10.1.0.53"
                ],
                "auth": "complete",
                "checks": {
                  "gateway": [
                    false,
                    true,
                    false
                  ],
                  "https": [
                    false,
                    false,
                    true
                  ],
                  "dns": [
                    null,
                    null
                  ],
                  "icmp": [
                    false,
                    true,
                    false
                  ]
                }
              }
            }
          }
        },
        {
          "id": "call_2",
          "name": "check_ip_config",
          "arguments": {
            "case_id": "W04"
          },
          "output": {
            "ok": true,
            "result": {
              "format_valid": true,
              "usable": true,
              "same_subnet": true,
              "issues": [],
              "address_class": "private"
            }
          }
        },
        {
          "id": "call_3",
          "name": "analyze_connectivity",
          "arguments": {
            "case_id": "W04"
          },
          "output": {
            "ok": true,
            "result": {
              "stats": {
                "gateway": {
                  "successes": 1,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 0.3333333333333333,
                  "valid_ratio": 1.0
                },
                "https": {
                  "successes": 1,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 0.3333333333333333,
                  "valid_ratio": 1.0
                },
                "dns": {
                  "successes": 0,
                  "valid": 0,
                  "total": 2,
                  "success_ratio": null,
                  "valid_ratio": 0.0
                },
                "icmp": {
                  "successes": 1,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 0.3333333333333333,
                  "valid_ratio": 1.0
                }
              },
              "auth": "complete",
              "conflicts": [
                "dns: invalid/missing samples are not failures"
              ],
              "limitation": "Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage."
            }
          }
        },
        {
          "id": "call_4",
          "name": "compare_snapshots",
          "arguments": {
            "case_id": "W04"
          },
          "output": {
            "ok": true,
            "result": {
              "same_device": true,
              "seconds_apart": 60.0,
              "comparable": true,
              "changes": {
                "bssid": {
                  "indoor": "AP-IN",
                  "outdoor": "AP-OUT"
                },
                "rssi_dbm": {
                  "indoor": -48,
                  "outdoor": -86
                }
              },
              "limitations": [
                "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
              ]
            }
          }
        }
      ],
      "rounds": [],
      "skill_sha256": "fb90e5eaa4afe49700c913ef712245fa867302eff1f7accd498a43f3d6271c47",
      "question": "门外网络不稳定，连接图标仍在。",
      "conclusion": {
        "assessment": "离线规则演示的暂定判断：conflicting",
        "label": "conflicting",
        "evidence": [
          {
            "claim": "地址检查结果：{\"format_valid\": true, \"usable\": true, \"same_subnet\": true, \"issues\": [], \"address_class\": \"private\"}",
            "source_ids": [
              "call_2"
            ]
          },
          {
            "claim": "分层检查统计：{\"stats\": {\"gateway\": {\"successes\": 1, \"valid\": 3, \"total\": 3, \"success_ratio\": 0.3333333333333333, \"valid_ratio\": 1.0}, \"https\": {\"successes\": 1, \"valid\": 3, \"total\": 3, \"success_ratio\": 0.3333333333333333, \"valid_ratio\": 1.0}, \"dns\": {\"successes\": 0, \"valid\": 0, \"total\": 2, \"success_ratio\": null, \"valid_ratio\": 0.0}, \"icmp\": {\"successes\": 1, \"valid\": 3, \"total\": 3, \"success_ratio\": 0.3333333333333333, \"valid_ratio\": 1.0}}, \"auth\": \"complete\", \"conflicts\": [\"dns: invalid/missing samples are not failures\"], \"limitation\": \"Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage.\"}",
            "source_ids": [
              "call_3"
            ]
          },
          {
            "claim": "对照限制：{\"same_device\": true, \"seconds_apart\": 60.0, \"comparable\": true, \"changes\": {\"bssid\": {\"indoor\": \"AP-IN\", \"outdoor\": \"AP-OUT\"}, \"rssi_dbm\": {\"indoor\": -48, \"outdoor\": -86}}, \"limitations\": [\"BSSID change alone does not prove roaming failure; signal alone cannot prove interference.\"]}",
            "source_ids": [
              "call_4"
            ]
          }
        ],
        "counterevidence": [
          "BSSID变化和单次ICMP失败均不能证明根因；HTTPS成功只覆盖测试目标。"
        ],
        "limitations": [
          "规则演示没有调用LLM，不能作为ABC模型实验。",
          "所有输入是模拟数据，不能定位真实楼门口根因。",
          "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
        ],
        "recommendations": [
          "补采同设备相近时段的地址、认证和多目标检查，再由工程师核验。"
        ]
      },
      "elapsed_seconds": 0.0016331000001628126,
      "presentation": "sample_replay"
    },
    {
      "status": "completed",
      "backend": "deterministic_demo",
      "case_id": "W05",
      "group": "C",
      "hypotheses": [
        "地址配置异常",
        "DNS异常",
        "认证未完成",
        "无线或接入点异常",
        "上游或策略限制"
      ],
      "calls": [
        {
          "id": "call_1",
          "name": "get_snapshot",
          "arguments": {
            "case_id": "W05"
          },
          "output": {
            "ok": true,
            "result": {
              "synthetic": true,
              "case_id": "W05",
              "location": "outdoor",
              "snapshot": {
                "device_id": "phone-A",
                "time": "2026-11-04T09:01:00+08:00",
                "ssid": "Campus",
                "bssid": "AP-OUT",
                "rssi_dbm": null,
                "ip": null,
                "prefix": null,
                "gateway": null,
                "dns": [
                  "10.1.0.53"
                ],
                "auth": null,
                "checks": {}
              }
            }
          }
        },
        {
          "id": "call_2",
          "name": "check_ip_config",
          "arguments": {
            "case_id": "W05"
          },
          "output": {
            "ok": true,
            "result": {
              "format_valid": null,
              "usable": null,
              "same_subnet": null,
              "issues": [
                "Missing address or prefix"
              ]
            }
          }
        },
        {
          "id": "call_3",
          "name": "analyze_connectivity",
          "arguments": {
            "case_id": "W05"
          },
          "output": {
            "ok": true,
            "result": {
              "stats": {
                "gateway": {
                  "successes": 0,
                  "valid": 0,
                  "total": 0,
                  "success_ratio": null,
                  "valid_ratio": null
                },
                "https": {
                  "successes": 0,
                  "valid": 0,
                  "total": 0,
                  "success_ratio": null,
                  "valid_ratio": null
                },
                "dns": {
                  "successes": 0,
                  "valid": 0,
                  "total": 0,
                  "success_ratio": null,
                  "valid_ratio": null
                },
                "icmp": {
                  "successes": 0,
                  "valid": 0,
                  "total": 0,
                  "success_ratio": null,
                  "valid_ratio": null
                }
              },
              "auth": null,
              "conflicts": [],
              "limitation": "Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage."
            }
          }
        },
        {
          "id": "call_4",
          "name": "compare_snapshots",
          "arguments": {
            "case_id": "W05"
          },
          "output": {
            "ok": true,
            "result": {
              "same_device": true,
              "seconds_apart": 60.0,
              "comparable": true,
              "changes": {
                "bssid": {
                  "indoor": "AP-IN",
                  "outdoor": "AP-OUT"
                },
                "rssi_dbm": {
                  "indoor": -48,
                  "outdoor": null
                },
                "ip": {
                  "indoor": "10.1.2.20",
                  "outdoor": null
                },
                "gateway": {
                  "indoor": "10.1.2.1",
                  "outdoor": null
                },
                "auth": {
                  "indoor": "complete",
                  "outdoor": null
                }
              },
              "limitations": [
                "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
              ]
            }
          }
        }
      ],
      "rounds": [],
      "skill_sha256": "fb90e5eaa4afe49700c913ef712245fa867302eff1f7accd498a43f3d6271c47",
      "question": "采集程序只返回了部分记录，请判断。",
      "conclusion": {
        "assessment": "离线规则演示的暂定判断：insufficient",
        "label": "insufficient",
        "evidence": [
          {
            "claim": "地址检查结果：{\"format_valid\": null, \"usable\": null, \"same_subnet\": null, \"issues\": [\"Missing address or prefix\"]}",
            "source_ids": [
              "call_2"
            ]
          },
          {
            "claim": "分层检查统计：{\"stats\": {\"gateway\": {\"successes\": 0, \"valid\": 0, \"total\": 0, \"success_ratio\": null, \"valid_ratio\": null}, \"https\": {\"successes\": 0, \"valid\": 0, \"total\": 0, \"success_ratio\": null, \"valid_ratio\": null}, \"dns\": {\"successes\": 0, \"valid\": 0, \"total\": 0, \"success_ratio\": null, \"valid_ratio\": null}, \"icmp\": {\"successes\": 0, \"valid\": 0, \"total\": 0, \"success_ratio\": null, \"valid_ratio\": null}}, \"auth\": null, \"conflicts\": [], \"limitation\": \"Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage.\"}",
            "source_ids": [
              "call_3"
            ]
          },
          {
            "claim": "对照限制：{\"same_device\": true, \"seconds_apart\": 60.0, \"comparable\": true, \"changes\": {\"bssid\": {\"indoor\": \"AP-IN\", \"outdoor\": \"AP-OUT\"}, \"rssi_dbm\": {\"indoor\": -48, \"outdoor\": null}, \"ip\": {\"indoor\": \"10.1.2.20\", \"outdoor\": null}, \"gateway\": {\"indoor\": \"10.1.2.1\", \"outdoor\": null}, \"auth\": {\"indoor\": \"complete\", \"outdoor\": null}}, \"limitations\": [\"BSSID change alone does not prove roaming failure; signal alone cannot prove interference.\"]}",
            "source_ids": [
              "call_4"
            ]
          }
        ],
        "counterevidence": [
          "BSSID变化和单次ICMP失败均不能证明根因；HTTPS成功只覆盖测试目标。"
        ],
        "limitations": [
          "规则演示没有调用LLM，不能作为ABC模型实验。",
          "所有输入是模拟数据，不能定位真实楼门口根因。",
          "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
        ],
        "recommendations": [
          "补采同设备相近时段的地址、认证和多目标检查，再由工程师核验。"
        ]
      },
      "elapsed_seconds": 0.0014716000000589702,
      "presentation": "sample_replay"
    },
    {
      "status": "completed",
      "backend": "deterministic_demo",
      "case_id": "W06",
      "group": "C",
      "hypotheses": [
        "地址配置异常",
        "DNS异常",
        "认证未完成",
        "无线或接入点异常",
        "上游或策略限制"
      ],
      "calls": [
        {
          "id": "call_1",
          "name": "get_snapshot",
          "arguments": {
            "case_id": "W06"
          },
          "output": {
            "ok": true,
            "result": {
              "synthetic": true,
              "case_id": "W06",
              "location": "outdoor",
              "snapshot": {
                "device_id": "phone-A",
                "time": "2026-11-04T09:01:00+08:00",
                "ssid": "Campus",
                "bssid": "AP-OUT",
                "rssi_dbm": -65,
                "ip": "10.1.2.20",
                "prefix": 24,
                "gateway": "10.1.2.1",
                "dns": [
                  "10.1.0.53"
                ],
                "auth": "required",
                "checks": {
                  "gateway": [
                    false,
                    false,
                    false
                  ],
                  "https": [
                    true,
                    true,
                    true
                  ],
                  "dns": [
                    true,
                    true,
                    true
                  ],
                  "icmp": [
                    true,
                    true,
                    true
                  ]
                }
              }
            }
          }
        },
        {
          "id": "call_2",
          "name": "check_ip_config",
          "arguments": {
            "case_id": "W06"
          },
          "output": {
            "ok": true,
            "result": {
              "format_valid": true,
              "usable": true,
              "same_subnet": true,
              "issues": [],
              "address_class": "private"
            }
          }
        },
        {
          "id": "call_3",
          "name": "analyze_connectivity",
          "arguments": {
            "case_id": "W06"
          },
          "output": {
            "ok": true,
            "result": {
              "stats": {
                "gateway": {
                  "successes": 0,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 0.0,
                  "valid_ratio": 1.0
                },
                "https": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                },
                "dns": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                },
                "icmp": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                }
              },
              "auth": "required",
              "conflicts": [
                "HTTPS works while gateway checks fail; ICMP policy or target limitation possible",
                "Authentication required but HTTPS succeeds; walled garden or stale state possible"
              ],
              "limitation": "Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage."
            }
          }
        },
        {
          "id": "call_4",
          "name": "compare_snapshots",
          "arguments": {
            "case_id": "W06"
          },
          "output": {
            "ok": true,
            "result": {
              "same_device": true,
              "seconds_apart": 60.0,
              "comparable": true,
              "changes": {
                "bssid": {
                  "indoor": "AP-IN",
                  "outdoor": "AP-OUT"
                },
                "rssi_dbm": {
                  "indoor": -48,
                  "outdoor": -65
                },
                "auth": {
                  "indoor": "complete",
                  "outdoor": "required"
                }
              },
              "limitations": [
                "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
              ]
            }
          }
        }
      ],
      "rounds": [],
      "skill_sha256": "fb90e5eaa4afe49700c913ef712245fa867302eff1f7accd498a43f3d6271c47",
      "question": "监控记录与用户现象不一致，请检查。",
      "conclusion": {
        "assessment": "离线规则演示的暂定判断：conflicting",
        "label": "conflicting",
        "evidence": [
          {
            "claim": "地址检查结果：{\"format_valid\": true, \"usable\": true, \"same_subnet\": true, \"issues\": [], \"address_class\": \"private\"}",
            "source_ids": [
              "call_2"
            ]
          },
          {
            "claim": "分层检查统计：{\"stats\": {\"gateway\": {\"successes\": 0, \"valid\": 3, \"total\": 3, \"success_ratio\": 0.0, \"valid_ratio\": 1.0}, \"https\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}, \"dns\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}, \"icmp\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}}, \"auth\": \"required\", \"conflicts\": [\"HTTPS works while gateway checks fail; ICMP policy or target limitation possible\", \"Authentication required but HTTPS succeeds; walled garden or stale state possible\"], \"limitation\": \"Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage.\"}",
            "source_ids": [
              "call_3"
            ]
          },
          {
            "claim": "对照限制：{\"same_device\": true, \"seconds_apart\": 60.0, \"comparable\": true, \"changes\": {\"bssid\": {\"indoor\": \"AP-IN\", \"outdoor\": \"AP-OUT\"}, \"rssi_dbm\": {\"indoor\": -48, \"outdoor\": -65}, \"auth\": {\"indoor\": \"complete\", \"outdoor\": \"required\"}}, \"limitations\": [\"BSSID change alone does not prove roaming failure; signal alone cannot prove interference.\"]}",
            "source_ids": [
              "call_4"
            ]
          }
        ],
        "counterevidence": [
          "BSSID变化和单次ICMP失败均不能证明根因；HTTPS成功只覆盖测试目标。"
        ],
        "limitations": [
          "规则演示没有调用LLM，不能作为ABC模型实验。",
          "所有输入是模拟数据，不能定位真实楼门口根因。",
          "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
        ],
        "recommendations": [
          "补采同设备相近时段的地址、认证和多目标检查，再由工程师核验。"
        ]
      },
      "elapsed_seconds": 0.0014160999999148771,
      "presentation": "sample_replay"
    },
    {
      "status": "completed",
      "backend": "deterministic_demo",
      "case_id": "W07",
      "group": "C",
      "hypotheses": [
        "地址配置异常",
        "DNS异常",
        "认证未完成",
        "无线或接入点异常",
        "上游或策略限制"
      ],
      "calls": [
        {
          "id": "call_1",
          "name": "get_snapshot",
          "arguments": {
            "case_id": "W07"
          },
          "output": {
            "ok": true,
            "result": {
              "synthetic": true,
              "case_id": "W07",
              "location": "outdoor",
              "snapshot": {
                "device_id": "phone-A",
                "time": "2026-11-04T09:01:00+08:00",
                "ssid": "Campus",
                "bssid": "AP-OUT",
                "rssi_dbm": -65,
                "ip": "10.1.2.20",
                "prefix": 24,
                "gateway": "10.1.2.1",
                "dns": [
                  "10.1.0.53"
                ],
                "auth": "complete",
                "checks": {
                  "gateway": [
                    true,
                    true,
                    true
                  ],
                  "https": [
                    true,
                    true,
                    true
                  ],
                  "dns": [
                    true,
                    true,
                    true
                  ],
                  "icmp": [
                    true,
                    true,
                    true
                  ]
                }
              }
            }
          }
        },
        {
          "id": "call_2",
          "name": "check_ip_config",
          "arguments": {
            "case_id": "W07"
          },
          "output": {
            "ok": true,
            "result": {
              "format_valid": true,
              "usable": true,
              "same_subnet": true,
              "issues": [],
              "address_class": "private"
            }
          }
        },
        {
          "id": "call_3",
          "name": "analyze_connectivity",
          "arguments": {
            "case_id": "W07"
          },
          "output": {
            "ok": true,
            "result": {
              "stats": {
                "gateway": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                },
                "https": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                },
                "dns": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                },
                "icmp": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                }
              },
              "auth": "complete",
              "conflicts": [],
              "limitation": "Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage."
            }
          }
        },
        {
          "id": "call_4",
          "name": "compare_snapshots",
          "arguments": {
            "case_id": "W07"
          },
          "output": {
            "ok": true,
            "result": {
              "same_device": true,
              "seconds_apart": 60.0,
              "comparable": true,
              "changes": {
                "bssid": {
                  "indoor": "AP-IN",
                  "outdoor": "AP-OUT"
                },
                "rssi_dbm": {
                  "indoor": -48,
                  "outdoor": -65
                }
              },
              "limitations": [
                "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
              ]
            }
          }
        }
      ],
      "rounds": [],
      "skill_sha256": "fb90e5eaa4afe49700c913ef712245fa867302eff1f7accd498a43f3d6271c47",
      "question": "从楼内移到门口后接入点发生变化，请巡检。",
      "conclusion": {
        "assessment": "离线规则演示的暂定判断：normal",
        "label": "normal",
        "evidence": [
          {
            "claim": "地址检查结果：{\"format_valid\": true, \"usable\": true, \"same_subnet\": true, \"issues\": [], \"address_class\": \"private\"}",
            "source_ids": [
              "call_2"
            ]
          },
          {
            "claim": "分层检查统计：{\"stats\": {\"gateway\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}, \"https\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}, \"dns\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}, \"icmp\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}}, \"auth\": \"complete\", \"conflicts\": [], \"limitation\": \"Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage.\"}",
            "source_ids": [
              "call_3"
            ]
          },
          {
            "claim": "对照限制：{\"same_device\": true, \"seconds_apart\": 60.0, \"comparable\": true, \"changes\": {\"bssid\": {\"indoor\": \"AP-IN\", \"outdoor\": \"AP-OUT\"}, \"rssi_dbm\": {\"indoor\": -48, \"outdoor\": -65}}, \"limitations\": [\"BSSID change alone does not prove roaming failure; signal alone cannot prove interference.\"]}",
            "source_ids": [
              "call_4"
            ]
          }
        ],
        "counterevidence": [
          "BSSID变化和单次ICMP失败均不能证明根因；HTTPS成功只覆盖测试目标。"
        ],
        "limitations": [
          "规则演示没有调用LLM，不能作为ABC模型实验。",
          "所有输入是模拟数据，不能定位真实楼门口根因。",
          "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
        ],
        "recommendations": [
          "补采同设备相近时段的地址、认证和多目标检查，再由工程师核验。"
        ]
      },
      "elapsed_seconds": 0.001683099999809201,
      "presentation": "sample_replay"
    },
    {
      "status": "completed",
      "backend": "deterministic_demo",
      "case_id": "W08",
      "group": "C",
      "hypotheses": [
        "地址配置异常",
        "DNS异常",
        "认证未完成",
        "无线或接入点异常",
        "上游或策略限制"
      ],
      "calls": [
        {
          "id": "call_1",
          "name": "get_snapshot",
          "arguments": {
            "case_id": "W08"
          },
          "output": {
            "ok": true,
            "result": {
              "synthetic": true,
              "case_id": "W08",
              "location": "outdoor",
              "snapshot": {
                "device_id": "phone-A",
                "time": "2026-11-04T09:01:00+08:00",
                "ssid": "Campus",
                "bssid": "AP-OUT",
                "rssi_dbm": -65,
                "ip": "10.1.2.20",
                "prefix": 24,
                "gateway": "10.1.2.1",
                "dns": [
                  "10.1.0.53"
                ],
                "auth": "complete",
                "checks": {
                  "gateway": [
                    true,
                    true,
                    true
                  ],
                  "https": [
                    true,
                    true,
                    true
                  ],
                  "dns": [
                    true,
                    true,
                    true
                  ],
                  "icmp": [
                    false,
                    false,
                    false
                  ]
                }
              }
            }
          }
        },
        {
          "id": "call_2",
          "name": "check_ip_config",
          "arguments": {
            "case_id": "W08"
          },
          "output": {
            "ok": true,
            "result": {
              "format_valid": true,
              "usable": true,
              "same_subnet": true,
              "issues": [],
              "address_class": "private"
            }
          }
        },
        {
          "id": "call_3",
          "name": "analyze_connectivity",
          "arguments": {
            "case_id": "W08"
          },
          "output": {
            "ok": true,
            "result": {
              "stats": {
                "gateway": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                },
                "https": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                },
                "dns": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                },
                "icmp": {
                  "successes": 0,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 0.0,
                  "valid_ratio": 1.0
                }
              },
              "auth": "complete",
              "conflicts": [],
              "limitation": "Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage."
            }
          }
        },
        {
          "id": "call_4",
          "name": "compare_snapshots",
          "arguments": {
            "case_id": "W08"
          },
          "output": {
            "ok": true,
            "result": {
              "same_device": true,
              "seconds_apart": 60.0,
              "comparable": true,
              "changes": {
                "bssid": {
                  "indoor": "AP-IN",
                  "outdoor": "AP-OUT"
                },
                "rssi_dbm": {
                  "indoor": -48,
                  "outdoor": -65
                }
              },
              "limitations": [
                "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
              ]
            }
          }
        }
      ],
      "rounds": [],
      "skill_sha256": "fb90e5eaa4afe49700c913ef712245fa867302eff1f7accd498a43f3d6271c47",
      "question": "诊断软件提示ping失败，但浏览器可以访问测试站。",
      "conclusion": {
        "assessment": "离线规则演示的暂定判断：normal",
        "label": "normal",
        "evidence": [
          {
            "claim": "地址检查结果：{\"format_valid\": true, \"usable\": true, \"same_subnet\": true, \"issues\": [], \"address_class\": \"private\"}",
            "source_ids": [
              "call_2"
            ]
          },
          {
            "claim": "分层检查统计：{\"stats\": {\"gateway\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}, \"https\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}, \"dns\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}, \"icmp\": {\"successes\": 0, \"valid\": 3, \"total\": 3, \"success_ratio\": 0.0, \"valid_ratio\": 1.0}}, \"auth\": \"complete\", \"conflicts\": [], \"limitation\": \"Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage.\"}",
            "source_ids": [
              "call_3"
            ]
          },
          {
            "claim": "对照限制：{\"same_device\": true, \"seconds_apart\": 60.0, \"comparable\": true, \"changes\": {\"bssid\": {\"indoor\": \"AP-IN\", \"outdoor\": \"AP-OUT\"}, \"rssi_dbm\": {\"indoor\": -48, \"outdoor\": -65}}, \"limitations\": [\"BSSID change alone does not prove roaming failure; signal alone cannot prove interference.\"]}",
            "source_ids": [
              "call_4"
            ]
          }
        ],
        "counterevidence": [
          "BSSID变化和单次ICMP失败均不能证明根因；HTTPS成功只覆盖测试目标。"
        ],
        "limitations": [
          "规则演示没有调用LLM，不能作为ABC模型实验。",
          "所有输入是模拟数据，不能定位真实楼门口根因。",
          "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
        ],
        "recommendations": [
          "补采同设备相近时段的地址、认证和多目标检查，再由工程师核验。"
        ]
      },
      "elapsed_seconds": 0.002896099999816215,
      "presentation": "sample_replay"
    },
    {
      "status": "completed",
      "backend": "deterministic_demo",
      "case_id": "W09",
      "group": "C",
      "hypotheses": [
        "地址配置异常",
        "DNS异常",
        "认证未完成",
        "无线或接入点异常",
        "上游或策略限制"
      ],
      "calls": [
        {
          "id": "call_1",
          "name": "get_snapshot",
          "arguments": {
            "case_id": "W09"
          },
          "output": {
            "ok": true,
            "result": {
              "synthetic": true,
              "case_id": "W09",
              "location": "outdoor",
              "snapshot": {
                "device_id": "phone-A",
                "time": "2026-11-04T09:01:00+08:00",
                "ssid": "Campus",
                "bssid": "AP-OUT",
                "rssi_dbm": -65,
                "ip": "10.1.2.20",
                "prefix": 24,
                "gateway": "10.1.2.1",
                "dns": [
                  "10.1.0.53"
                ],
                "auth": "required",
                "checks": {
                  "gateway": [
                    true,
                    true,
                    true
                  ],
                  "https": [
                    false,
                    false,
                    false
                  ],
                  "dns": [
                    false,
                    false,
                    false
                  ],
                  "icmp": [
                    true,
                    true,
                    true
                  ]
                }
              }
            }
          }
        },
        {
          "id": "call_2",
          "name": "check_ip_config",
          "arguments": {
            "case_id": "W09"
          },
          "output": {
            "ok": true,
            "result": {
              "format_valid": true,
              "usable": true,
              "same_subnet": true,
              "issues": [],
              "address_class": "private"
            }
          }
        },
        {
          "id": "call_3",
          "name": "analyze_connectivity",
          "arguments": {
            "case_id": "W09"
          },
          "output": {
            "ok": true,
            "result": {
              "stats": {
                "gateway": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                },
                "https": {
                  "successes": 0,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 0.0,
                  "valid_ratio": 1.0
                },
                "dns": {
                  "successes": 0,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 0.0,
                  "valid_ratio": 1.0
                },
                "icmp": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                }
              },
              "auth": "required",
              "conflicts": [],
              "limitation": "Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage."
            }
          }
        },
        {
          "id": "call_4",
          "name": "compare_snapshots",
          "arguments": {
            "case_id": "W09"
          },
          "output": {
            "ok": true,
            "result": {
              "same_device": true,
              "seconds_apart": 60.0,
              "comparable": true,
              "changes": {
                "bssid": {
                  "indoor": "AP-IN",
                  "outdoor": "AP-OUT"
                },
                "rssi_dbm": {
                  "indoor": -48,
                  "outdoor": -65
                },
                "auth": {
                  "indoor": "complete",
                  "outdoor": "required"
                }
              },
              "limitations": [
                "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
              ]
            }
          }
        }
      ],
      "rounds": [],
      "skill_sha256": "fb90e5eaa4afe49700c913ef712245fa867302eff1f7accd498a43f3d6271c47",
      "question": "故障切换后网络多项异常，请调查。",
      "conclusion": {
        "assessment": "离线规则演示的暂定判断：mixed",
        "label": "mixed",
        "evidence": [
          {
            "claim": "地址检查结果：{\"format_valid\": true, \"usable\": true, \"same_subnet\": true, \"issues\": [], \"address_class\": \"private\"}",
            "source_ids": [
              "call_2"
            ]
          },
          {
            "claim": "分层检查统计：{\"stats\": {\"gateway\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}, \"https\": {\"successes\": 0, \"valid\": 3, \"total\": 3, \"success_ratio\": 0.0, \"valid_ratio\": 1.0}, \"dns\": {\"successes\": 0, \"valid\": 3, \"total\": 3, \"success_ratio\": 0.0, \"valid_ratio\": 1.0}, \"icmp\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}}, \"auth\": \"required\", \"conflicts\": [], \"limitation\": \"Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage.\"}",
            "source_ids": [
              "call_3"
            ]
          },
          {
            "claim": "对照限制：{\"same_device\": true, \"seconds_apart\": 60.0, \"comparable\": true, \"changes\": {\"bssid\": {\"indoor\": \"AP-IN\", \"outdoor\": \"AP-OUT\"}, \"rssi_dbm\": {\"indoor\": -48, \"outdoor\": -65}, \"auth\": {\"indoor\": \"complete\", \"outdoor\": \"required\"}}, \"limitations\": [\"BSSID change alone does not prove roaming failure; signal alone cannot prove interference.\"]}",
            "source_ids": [
              "call_4"
            ]
          }
        ],
        "counterevidence": [
          "BSSID变化和单次ICMP失败均不能证明根因；HTTPS成功只覆盖测试目标。"
        ],
        "limitations": [
          "规则演示没有调用LLM，不能作为ABC模型实验。",
          "所有输入是模拟数据，不能定位真实楼门口根因。",
          "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
        ],
        "recommendations": [
          "补采同设备相近时段的地址、认证和多目标检查，再由工程师核验。"
        ]
      },
      "elapsed_seconds": 0.0037795000002915913,
      "presentation": "sample_replay"
    },
    {
      "status": "completed",
      "backend": "deterministic_demo",
      "case_id": "W10",
      "group": "C",
      "hypotheses": [
        "地址配置异常",
        "DNS异常",
        "认证未完成",
        "无线或接入点异常",
        "上游或策略限制"
      ],
      "calls": [
        {
          "id": "call_1",
          "name": "get_snapshot",
          "arguments": {
            "case_id": "W10"
          },
          "output": {
            "ok": true,
            "result": {
              "synthetic": true,
              "case_id": "W10",
              "location": "outdoor",
              "snapshot": {
                "device_id": "phone-B",
                "time": "2026-11-04T12:00:00+08:00",
                "ssid": "Campus",
                "bssid": "AP-OUT",
                "rssi_dbm": -65,
                "ip": "10.1.2.20",
                "prefix": 24,
                "gateway": "10.1.2.1",
                "dns": [
                  "10.1.0.53"
                ],
                "auth": "complete",
                "checks": {
                  "gateway": [
                    true,
                    true,
                    true
                  ],
                  "https": [
                    false,
                    false,
                    false
                  ],
                  "dns": [
                    true,
                    true,
                    true
                  ],
                  "icmp": [
                    true,
                    true,
                    true
                  ]
                }
              }
            }
          }
        },
        {
          "id": "call_2",
          "name": "check_ip_config",
          "arguments": {
            "case_id": "W10"
          },
          "output": {
            "ok": true,
            "result": {
              "format_valid": true,
              "usable": true,
              "same_subnet": true,
              "issues": [],
              "address_class": "private"
            }
          }
        },
        {
          "id": "call_3",
          "name": "analyze_connectivity",
          "arguments": {
            "case_id": "W10"
          },
          "output": {
            "ok": true,
            "result": {
              "stats": {
                "gateway": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                },
                "https": {
                  "successes": 0,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 0.0,
                  "valid_ratio": 1.0
                },
                "dns": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                },
                "icmp": {
                  "successes": 3,
                  "valid": 3,
                  "total": 3,
                  "success_ratio": 1.0,
                  "valid_ratio": 1.0
                }
              },
              "auth": "complete",
              "conflicts": [],
              "limitation": "Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage."
            }
          }
        },
        {
          "id": "call_4",
          "name": "compare_snapshots",
          "arguments": {
            "case_id": "W10"
          },
          "output": {
            "ok": true,
            "result": {
              "same_device": false,
              "seconds_apart": 10800.0,
              "comparable": false,
              "changes": {
                "bssid": {
                  "indoor": "AP-IN",
                  "outdoor": "AP-OUT"
                },
                "rssi_dbm": {
                  "indoor": -48,
                  "outdoor": -65
                }
              },
              "limitations": [
                "Different or unknown device",
                "Missing timestamps or >300s gap; temporal confounding",
                "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
              ]
            }
          }
        }
      ],
      "rounds": [],
      "skill_sha256": "fb90e5eaa4afe49700c913ef712245fa867302eff1f7accd498a43f3d6271c47",
      "question": "两次不同位置的记录表现不同，请判断是否位置导致。",
      "conclusion": {
        "assessment": "离线规则演示的暂定判断：insufficient",
        "label": "insufficient",
        "evidence": [
          {
            "claim": "地址检查结果：{\"format_valid\": true, \"usable\": true, \"same_subnet\": true, \"issues\": [], \"address_class\": \"private\"}",
            "source_ids": [
              "call_2"
            ]
          },
          {
            "claim": "分层检查统计：{\"stats\": {\"gateway\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}, \"https\": {\"successes\": 0, \"valid\": 3, \"total\": 3, \"success_ratio\": 0.0, \"valid_ratio\": 1.0}, \"dns\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}, \"icmp\": {\"successes\": 3, \"valid\": 3, \"total\": 3, \"success_ratio\": 1.0, \"valid_ratio\": 1.0}}, \"auth\": \"complete\", \"conflicts\": [], \"limitation\": \"Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage.\"}",
            "source_ids": [
              "call_3"
            ]
          },
          {
            "claim": "对照限制：{\"same_device\": false, \"seconds_apart\": 10800.0, \"comparable\": false, \"changes\": {\"bssid\": {\"indoor\": \"AP-IN\", \"outdoor\": \"AP-OUT\"}, \"rssi_dbm\": {\"indoor\": -48, \"outdoor\": -65}}, \"limitations\": [\"Different or unknown device\", \"Missing timestamps or >300s gap; temporal confounding\", \"BSSID change alone does not prove roaming failure; signal alone cannot prove interference.\"]}",
            "source_ids": [
              "call_4"
            ]
          }
        ],
        "counterevidence": [
          "BSSID变化和单次ICMP失败均不能证明根因；HTTPS成功只覆盖测试目标。"
        ],
        "limitations": [
          "规则演示没有调用LLM，不能作为ABC模型实验。",
          "所有输入是模拟数据，不能定位真实楼门口根因。",
          "Different or unknown device",
          "Missing timestamps or >300s gap; temporal confounding",
          "BSSID change alone does not prove roaming failure; signal alone cannot prove interference."
        ],
        "recommendations": [
          "补采同设备相近时段的地址、认证和多目标检查，再由工程师核验。"
        ]
      },
      "elapsed_seconds": 0.0013638000000355532,
      "presentation": "sample_replay"
    }
  ]
};
