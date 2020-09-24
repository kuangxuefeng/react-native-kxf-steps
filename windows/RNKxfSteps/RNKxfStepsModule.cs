using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Kxf.Steps.RNKxfSteps
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNKxfStepsModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNKxfStepsModule"/>.
        /// </summary>
        internal RNKxfStepsModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNKxfSteps";
            }
        }
    }
}
