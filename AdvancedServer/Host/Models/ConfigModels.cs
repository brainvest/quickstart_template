using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Brainvest.Dscribe.QuickStart.AdvancedServer.Host.Models
{
	public class ConfigModel
	{
		public SmtpConfigModel Email { get; set; }
	}

	public class SmtpConfigModel
	{
		public string Server { get; set; }
		public int? Port { get; set; }
		public string UserName { get; set; }
		public string Password { get; set; }
		public string From { get; set; }
		public string To { get; set; }
		public string SendABssTo { get; set; }
	}
}
