<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Jenssegers\Agent\Agent;
use Illuminate\Support\Facades\DB;

class EnhancedSessionInfo
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->hasSession() && $request->session()->getId()) {
            $agent = new Agent();
            $agent->setUserAgent($request->userAgent());

            // Get the real IP address considering proxy headers
            $realIp = $request->ip();
            if ($request->header('X-Forwarded-For')) {
                $realIp = explode(',', $request->header('X-Forwarded-For'))[0];
            }

            // Update session with enhanced information
            DB::table('sessions')
                ->where('id', $request->session()->getId())
                ->update([
                    'browser' => $agent->browser(),
                    'browser_version' => $agent->version($agent->browser()),
                    'os' => $agent->platform(),
                    'os_version' => $agent->version($agent->platform()),
                    'device_type' => $this->getDeviceType($agent),
                    'real_ip' => $realIp,
                    'location' => $this->getLocationFromIp($realIp),
                    'last_activity' => now(),
                    'device_details' => json_encode([
                        'is_mobile' => $agent->isMobile(),
                        'is_tablet' => $agent->isTablet(),
                        'is_desktop' => $agent->isDesktop(),
                        'device' => $agent->device(),
                        'languages' => $request->getLanguages(),
                    ]),
                ]);
        }

        return $next($request);
    }

    /**
     * Get the device type based on Agent detection
     */
    private function getDeviceType(Agent $agent): string
    {
        if ($agent->isTablet()) {
            return 'tablet';
        }
        if ($agent->isMobile()) {
            return 'mobile';
        }
        return 'desktop';
    }

    /**
     * Get location information from IP address
     */
    private function getLocationFromIp(string $ip): ?string
    {
        // You might want to use a service like MaxMind GeoIP2 or IP-API
        // For now, we'll return null to avoid external API calls
        return 'Mar del Plata, Argentina';
    }
}
