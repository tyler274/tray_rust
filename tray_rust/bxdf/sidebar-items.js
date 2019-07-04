initSidebarItems({"enum":[["BxDFType","Various types of BxDFs that can be selected to specify which types of surface functions should be evaluated"]],"fn":[["arctan_theta","Compute the value of arctan theta for a vector in shading space"],["cos_phi","Compute the value of cosine phi for a vector in shading space"],["cos_theta","Compute the value of cosine theta for a vector in shading space"],["cos_theta_sqr","Compute the value of cosine^2 theta for a vector in shading space"],["same_hemisphere","Check if two vectors are in the same hemisphere in shading space"],["sin_phi","Compute the value of sine phi for a vector in shading space"],["sin_theta","Compute the value of sine theta for a vector in shading space"],["sin_theta_sqr","Compute the value of (sine theta)^2  for a vector in shading space"],["tan_theta","Compute the value of tan theta for a vector in shading space"],["tan_theta_sqr","Compute the value of tan theta^2 for a vector in shading space"]],"mod":[["bsdf","Defines the BSDF which acts as a container for composing the various BRDFs and BTDFs that describe the surface's properties"],["fresnel","Provides the Fresnel term trait and implementations for conductors and dielectric materials"],["lambertian","Defines a Lambertion BRDF that describes perfectly diffuse surfaces. See Lambertian reflectance"],["merl","The MERL BRDF represents the surface's properties through data loaded from a MERL BRDF Database file. The BRDF itself just stores the data loaded from the BRDF file while actual loading is done by the MERL material when it's created."],["microfacet","Module providing various microfacet distribution functions and trait that's implemented by all provided distributions"],["microfacet_transmission","This module provides a microfacet model for transmission (a BTDF), see Walter et al. 07 for details."],["oren_nayar","Defines an Oren-Nayar BRDF that describes diffuse reflection from rough surfaces See Oren-Nayar reflectance model"],["specular_reflection","Defines a BRDF that describes specular reflection"],["specular_transmission","Defines a BTDF that describes specular transmission"],["torrance_sparrow","This module provides the Torrance Sparrow microfacet BRDF, see Walter et al. 07 for details."]],"trait":[["BxDF","Trait implemented by BRDF/BTDFs in `tray_rust`. Provides methods for evaluating and sampling the function"]]});